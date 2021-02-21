const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "What exercise would you like?"
      },  
      name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise"
  },

  day: {
    type: Date,
    default: Date.now
  },
  distance: {
    type: Number
  },
  
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
