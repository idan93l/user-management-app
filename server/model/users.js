const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  id: Number,
  name: String
})

const userSchema = mongoose.Schema({
  _id: String,
  index: Number,
  guid: String,
  isActive: Boolean,
  balance: String,
  picture: String,
  age: Number,
  eyecolor: String,
  name: {
    first: String,
    last: String
  },
  company: String,
  email: String,
  phone: String,
  address: String,
  about: String,
  registered: String,
  latitude: String,
  longitude: String,
  tags: [String],
  range: [Number],
  friends: [friendSchema],
  greeting: String,
  favoriteFruit: String
})

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;