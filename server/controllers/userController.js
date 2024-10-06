import { sendVerificationEmail } from "../services/mailer.js";
import {
  createUser,
  generateToken,
  getProfile,
  getUser,
  saveVerificationTokenToDB,
  updateUser,
} from "../services/userServices.js";
import { ApiError, ApiResponse } from "../utils/responseHandler.js";

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role)
      return ApiError(res, 400, "All fields are required");

    let user = await getUser(email);
    if (user) return ApiError(res, 400, "User already exists");

    user = { password, username: email.split("@")[0], ...req.body };

    const newUser = await createUser(user);
    const token = generateToken(newUser);

    return ApiResponse(res, 201, "User registered successfully", {
      user: newUser,
      token,
    });
  } catch (error) {
    return ApiError(res, 500, "Error registering user", error.message);
  }
};

const updateDetails = async (req, res) => {
  try {
    const { email, userDetails } = req.body;
    if (!email || !userDetails)
      return ApiError(res, 400, "All fields are required");

    const user = await updateUser(email, userDetails);
    return ApiResponse(res, 200, "User details updated successfully", { user });
  } catch (error) {
    return ApiError(res, 500, "Error updating user details", error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return ApiError(res, 400, "Email and password are required");

    const user = await getUser(email);
    if (!user) return ApiError(res, 404, "User not found");

    const isValid = await user.comparePassword(password);
    if (!isValid) return ApiError(res, 401, "Invalid password");
    const token = generateToken(user);
    let resUser = user.toObject();
    delete resUser.password;

    return ApiResponse(res, 200, "Login successful", { user: resUser, token });
  } catch (error) {
    return ApiError(res, 500, "Error logging in", error.message);
  }
};

const userVerificationRequest = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await getUser(email);
    if (!user) return ApiError(res, 404, "User not found");

    if (user.isVerified)
      return ApiResponse(res, 200, "User is already verified");

    const verificationToken = await sendVerificationEmail(user.email);
    await saveVerificationTokenToDB(user.email, verificationToken);

    return ApiResponse(res, 200, "Verification email sent successfully");
  } catch (error) {
    return ApiError(
      res,
      500,
      "Error sending verification email",
      error.message
    );
  }
};

const userVerification = async (req, res) => {
  try {
    const { email, token } = req.body;
    if (!email || !token)
      return ApiError(res, 400, "Email and token are required");

    const user = await getUser(email);
    if (!user) return ApiError(res, 404, "User not found");

    if (!user.verificationToken || user.verificationToken !== token) {
      return ApiError(res, 400, "Invalid or expired token");
    }

    user.isVerified = true;
    user.verificationToken = undefined; // Clear the token once verified
    await user.save();

    return ApiResponse(res, 200, "User verified successfully");
  } catch (error) {
    return ApiError(res, 500, "Error verifying user", error.message);
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.query;
    const user = await getProfile(username);
    if (!user) return ApiError(res, 404, "User not found");

    return ApiResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    return ApiError(res, 500, "Error fetching user", error.message);
  }
};

export {
  register,
  login,
  updateDetails,
  userVerificationRequest,
  userVerification,
  getUserByUsername,
};
