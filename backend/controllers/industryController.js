import Industry from '../models/industry.js';

export const getIndustries = async (req, res) => {
  try {
    const industries = await Industry.find();
    res.json(industries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createIndustry = async (req, res) => {
  try {
    const industry = new Industry(req.body);
    await industry.save();
    res.status(201).json(industry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateIndustry = async (req, res) => {
  try {
    const updated = await Industry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteIndustry = async (req, res) => {
  try {
    await Industry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Industry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
