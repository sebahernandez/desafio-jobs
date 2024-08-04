const { getUserById } = require("../models/userModel.js");

exports.getUser = async (req, res) => {
  try {
    const user = await getUserById(req.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
