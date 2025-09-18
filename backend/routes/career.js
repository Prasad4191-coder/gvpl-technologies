import express from 'express';
import { getCareers, createCareer, updateCareer, deleteCareer } from '../controllers/careerController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCareers);
router.post('/', auth, createCareer);
router.put('/:id', auth, updateCareer);
router.delete('/:id', auth, deleteCareer);

export default router;
