import express from 'express';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getBlogs);
router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

export default router;
