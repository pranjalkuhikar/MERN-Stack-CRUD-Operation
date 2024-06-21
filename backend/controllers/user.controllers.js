import { userModel, validateUser } from "../models/user.models.js";

const UserRegister = async (req, res) => {
  const { firstname, lastname, mobile, state, city } = req.body;

  try {
    await validateUser({ firstname, lastname, mobile, state, city });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }

  const existingUser = await userModel.findOne({ mobile });
  if (existingUser) {
    return res
      .status(400)
      .send({ error: "User with this mobile number already exists" });
  }

  const newUser = new userModel({ firstname, lastname, mobile, state, city });
  try {
    await newUser.save();
    res.status(201).json({ success: true, Message: "User Created", newUser });
  } catch (err) {
    if (err.code === 11000) {
      existingUser == newUser;
      return res
        .status(400)
        .send({ error: "User with this mobile number already exists" });
    } else {
      return res.status(500).send({ error: "Failed to create user" });
    }
  }
};

const GetUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, Message: "User Not Found" });
    }
    res.status(200).json({ success: true, Message: "Here is All User", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, Message: "Internal Server Error" });
  }
};

const UpdateUser = async (req, res) => {
  try {
    let UserId = req.params.id;
    const updateUser = await userModel.findByIdAndUpdate(UserId, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res
        .status(404)
        .json({ success: false, Message: "User Not Found" });
    }
    res
      .status(200)
      .json({ success: true, Message: "Update User Successfully", updateUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, Message: "Internal Server Error" });
  }
};

const DeleteUser = async (req, res) => {
  try {
    let UserId = req.params.id;
    const deleteUser = await userModel.findByIdAndDelete(UserId);
    if (!deleteUser) {
      return res
        .status(404)
        .json({ success: false, Message: "User Not Found" });
    }
    res
      .status(200)
      .json({ success: true, Message: "Delete User Successfully", deleteUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, Message: "Internal Server Error" });
  }
};

export { UserRegister, GetUser, UpdateUser, DeleteUser };
