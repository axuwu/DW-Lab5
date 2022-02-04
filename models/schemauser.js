const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    index: { unique: true },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    index: { unique: true },
    required: true,
  },
  subscriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disciplina",
      default: null,
    },
  ],
  Created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
