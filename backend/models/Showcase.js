const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    age: { type: Number, required: true },
    platforms: [String],
    region: { type: String, required: true },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'      
    }
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('Showcase', schema);