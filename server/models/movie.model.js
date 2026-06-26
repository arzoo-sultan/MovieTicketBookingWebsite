import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      trim: true,
    },
    isPublished: {
    type: Boolean,
    default: true
},
    title: {
      type: String,
      required: true,
      trim: true,
    },

    overview: {
      type: String,
      required: true,
      trim: true,
    },

    poster_path: {
      type: String,
      required: true,
      trim: true,
    },

    release_date: {
      type: String,
      required: true,
    },

    original_language: {
      type: String,
      required: true,
    },

    tagline: {
      type: String,
      default: "",
    },

    genres: [
      {
        id: Number,
        name: String,
      },
    ],

    casts: [
      {
        id: Number,
        name: String,
        character: String,
        profile_path: String,
      },
    ],

    vote_average: {
      type: Number,
      required: true,
    },

    runtime: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;