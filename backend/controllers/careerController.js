import Career from '../models/career.js';

export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCareer = async (req, res) => {
  try {
    const career = new Career(req.body);
    await career.save();
    res.status(201).json(career);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCareer = async (req, res) => {
  try {
    const updated = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCareer = async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ message: 'Career deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
