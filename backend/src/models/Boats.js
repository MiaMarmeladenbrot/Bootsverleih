import mongoose from "mongoose";

const boatsSchema = new mongoose.Schema(
  {
    boatName: { type: String, required: true },
    constructionYear: { type: Number, required: true },
    serialNumber: { type: Number, required: true },
    material: {
      type: String,
      enum: ["Holz", "GFK", "Pappe", "Seelen"],
      required: true,
    },
    boatType: {
      type: String,
      enum: [
        "Segelboot",
        "Tretboot",
        "Luftkissenboot",
        "Geisterschiff",
        "Containerschiff",
      ],
      required: true,
    },
  },
  { collection: "boats", timestamps: true }
);

export const Boat = mongoose.model("Boat", boatsSchema);
