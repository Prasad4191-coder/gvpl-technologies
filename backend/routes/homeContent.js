import express from 'express';
import { getHomeContent, updateHomeContent } from '../controllers/homeContentController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getHomeContent);
router.put('/', auth, updateHomeContent);

export default router;
