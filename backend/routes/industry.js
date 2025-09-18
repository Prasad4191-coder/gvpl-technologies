import express from 'express';
import { getIndustries, createIndustry, updateIndustry, deleteIndustry } from '../controllers/industryController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getIndustries);
router.post('/', auth, createIndustry);
router.put('/:id', auth, updateIndustry);
router.delete('/:id', auth, deleteIndustry);

export default router;
