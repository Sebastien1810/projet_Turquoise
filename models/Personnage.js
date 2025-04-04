const mongoose = require("mongoose");

const personnageSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
    unique: true,
  },
  nom: { type: String, required: true },
  stats: {
    bonheur: {
      type: Number,
      default: 50,
    },
    energie: {
      type: Number,
      default: 50,
    },
    sport: { type: Number, default: 10 },
    intelligence: { type: Number, default: 10 },
  },
});

module.exports = mongoose.model("Personnage", personnageSchema);
