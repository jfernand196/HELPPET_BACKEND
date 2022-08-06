const { Schema, model } = require("mongoose");

const foundationSchema = new Schema( // foundationSchema
  {
    // userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    photo: { type: String },
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],
  },

  { timestamps: true, versionKey: false }
);

module.exports = { Model: model("Foundation", foundationSchema) };
