import mongoose from "mongoose";

const reservationsSchema = new mongoose.Schema(
  {
    boatId: { type: mongoose.Types.ObjectId, ref: "Boat", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { collection: "reservations", timestamps: true }
);

export const Reservation = mongoose.model("Reservation", reservationsSchema);
