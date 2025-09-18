import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gvpl', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Example route
app.get('/', (req, res) => {
  res.send('GVPL Backend API is running');
});




// Import routes
import homeContentRoutes from './routes/homeContent.js';
import serviceRoutes from './routes/service.js';
import industryRoutes from './routes/industry.js';
import blogRoutes from './routes/blog.js';
import careerRoutes from './routes/career.js';
import authRoutes from './routes/auth.js';

// Use routes
app.use('/api/home', homeContentRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/industries', industryRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
