import mongoose from "mongoose";

const showsSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      ref: "Movie",
      required: true,
    },

    showDateTime: {
      type: Date,
      required: true,
    },

    showPrice: {
      type: Number,
      required: true,
    },

    occupiedSeats: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const Show = mongoose.model("Show", showsSchema);

export default Show;