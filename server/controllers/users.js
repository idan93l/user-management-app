const UserModel = require('../model/users.js')

const getUsers = async (req, res) => {
  try {
    const usersData = await UserModel.find();
    res.status(200).send(usersData);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await UserModel.findOne({ _id: id });
      if (!user) {
          return res.status(400).send("User with this ID does not exists")
      }
      res.status(200).send(user);
  } catch (err) {
      res.status(500).send({ error: err.message })
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;
  // console.log(req.body);
  try {
      const user = await UserModel.findOneAndUpdate({ _id: id }, { isActive: isActive });
      await user.save();
      if (!user) {
          return res.status(400).send("User with this ID does not exists");
      }
      res.status(200).send();
  } catch (err) {
      res.status(500).send({ error: err.message })
  }
}

module.exports = { getUsers, getUser, updateUser };