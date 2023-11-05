const mongoose = require('mongoose');

//Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
  })

//models
const User = mongoose.model('User', userSchema)

module.exports = User