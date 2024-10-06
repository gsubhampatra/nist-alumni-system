import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import log from "../utils/logger.js";
import { JWT_SECRET } from "../configs/config.js";

const getUser = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    log.error("Error getting user", error);
    throw new Error("Error retrieving user");
  }
};

const getProfile = async (username) => {
  try {
    return await User.findOne({ username }).select("-password");
  } catch (error) {
    throw new Error("Error retrieving user");

  }

}


const createUser = async (user) => {
  try {
    let newUser = await User.create(user);
    newUser = newUser.toObject();
    delete newUser.password;
    log.info(`New User Created - ${JSON.stringify(newUser)}`);
    return newUser;
  } catch (error) {
    log.error("Error creating user", error);
    throw new Error("Error creating user");
  }
};

const updateUser = async (email, userDetails) => {
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { userDetails },
      { new: true }
    ).select("-password");
    if (!user) throw new Error("User not found");
    log.info(`User Details Updated - ${JSON.stringify(user)}`);
    return user;
  } catch (error) {
    log.error("Error updating user details", error);
    throw new Error("Error updating user details");
  }
};

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1d",
  });
};



const saveVerificationTokenToDB = async (email, token) => {
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { verificationToken: token }
    );
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    log.error("Error saving verification token", error);
    throw new Error("Error saving verification token");
  }
};

export {
  getUser,
  createUser,
  updateUser,
  generateToken,
  saveVerificationTokenToDB,
  getProfile
};
