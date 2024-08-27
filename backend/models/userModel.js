const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: ture },
    email: { type: String, required: ture },
    password: { type: String, required: ture },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
