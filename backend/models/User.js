const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    address: String,
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('User', schema);