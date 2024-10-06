import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

// Define the User Schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,  // Ensuring password is always provided
    },
    role: {
      type: String,
      enum: ["admin", "student", "alumni"],
      default: "student",
    },
    userDetails: {
      type: Schema.Types.Mixed, // Flexible field
      default: {},
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash passwords before saving to the database
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to compare hashed password with plain text password
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Creating a unique index for email to speed up queries
UserSchema.index({ email: 1 });

// Exporting the User model
const User = mongoose.model("User", UserSchema);

export default User;
