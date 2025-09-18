import HomeContent from '../models/homeContent.js';

export const getHomeContent = async (req, res) => {
  try {
    const content = await HomeContent.findOne();
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateHomeContent = async (req, res) => {
  try {
    const updated = await HomeContent.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
