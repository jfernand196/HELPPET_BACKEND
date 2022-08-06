const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
     name:{ type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
    userType: { type: String, default: "User" },
    photo: { type: String},
    foundation: [{ type: Schema.Types.ObjectId, ref: "Foundation", required: true }],
  },
  { timestamps: true,
    versionKey: false }
);

module.exports = { Model: model("User", UserSchema) };
