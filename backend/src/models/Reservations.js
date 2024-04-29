import mongoose from "mongoose";

const reservationsSchema = new mongoose.Schema(
  {
    boatId: { type: mongoose.Types.ObjectId, ref: "Boat", required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
  },
  { collection: "reservations", timestamps: true }
);

export const Reservation = mongoose.model("Reservation", reservationsSchema);
