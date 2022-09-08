const getUsers = (req, res) => {
  res.status(200).send(`Get all User"`);
};

const getUser = (req, res) => {
  res.status(201).send("A User");
};

const createUser = (req, res) => {
  res.status(200).send("Create a Users");
};

const updateUser = (req, res) => {
  res.status(201).send(`Users with ID`);
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete user");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
