const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    address: String,
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('User', schema);