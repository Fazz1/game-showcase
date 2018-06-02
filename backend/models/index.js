const mongoose = require('mongoose');
module.exports = function() {
  console.log('Trying to connect to db');
  mongoose.connect('mongodb://localhost:27017/game_showcase');
  mongoose.connection.once('open', () => {
    console.log('Successfully connected to database');
  })
}