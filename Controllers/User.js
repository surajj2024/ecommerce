const UserModel = require("../Models/User");

const signUp = async (req, res) => {
  const newUser = await UserModel.create({
    ...req.body,
  });

  res.json({
    message: "yes",
  });
};

const userController = {
  signUp,
};

module.exports = userController;
