const User = require('../models/user');

const handleGetAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: 'User not found' });
  }
  return res.json(user);
};

const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: 'success' });
};

const handleUpdateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ msg: 'User not found' });
    }
    await User.findByIdAndUpdate(userId, updatedUserData);
    const updatedUser = await User.findById(userId);
    return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  if (!body?.first_name || !body?.last_name || !body?.email || !body?.gender || !body?.job_title) {
    return res.status(400).json({ msg: 'All fields are required' });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title
  });
  console.log(result);
  return res.status(201).json({ msg: 'success' });
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser
};
