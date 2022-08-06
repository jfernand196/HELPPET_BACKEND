const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    foundationId: { 
      type: Schema.Types.ObjectId, 
      ref: "Foundation",
      },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    breed: {
      type: String,
      required: [true, "Breed is required"],
    },
    color: {
      type: String,
      required: [true, "Color is required"],
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"],
    },
    photo: {
      type: String,
      required: [true, "Photo is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = { Model: model("Pet", petSchema) };
