import mongoose from "mongoose";

const boatsSchema = new mongoose.Schema(
  {
    boatName: { type: String, required: true },
    constructionYear: { type: Number, required: true },
    serialNumber: { type: Number, required: true },
    material: { type: String, required: true },
    boatType: { type: String, required: true },
  },
  { collection: "boats", timestamps: true }
);

export const Boat = mongoose.model("Boat", boatsSchema);
