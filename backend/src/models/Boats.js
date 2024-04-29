import mongoose from "mongoose";

const boatsSchema = new mongoose.Schema(
  {
    constructionYear: { type: Number, required: true },
    serialNumber: { type: Number, required: true },
    material: { type: String, required: true },
    boatType: { type: String, required: true },
  },
  { collection: "boats", timestamps: true }
);

export const Boat = mongoose.model("Boat", boatsSchema);
