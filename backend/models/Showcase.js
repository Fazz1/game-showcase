const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: String,
    genre: String,
    age: Number,
    platforms: [String],
    region: String,
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('User', schema);