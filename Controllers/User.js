const UserModel = require("../Models/User");

const signUp = async (req, res) => {
  const newUser = await UserModel.create({
    ...req.body,
  });

  res.json({
    success: true,
    message: "user created successfully",
  });
};

const userController = {
  signUp,
};

module.exports = userController;
