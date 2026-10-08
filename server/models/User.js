const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    if (typeof next === "function") return next();
    return;
  }
  this.password = await bcrypt.hash(this.password, 10);
  if (typeof next === "function") next();
});

module.exports = mongoose.model("User", userSchema);

