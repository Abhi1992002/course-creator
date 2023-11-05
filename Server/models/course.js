const mongoose = require('mongoose');

//Schema
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
  })

//model
const Course = mongoose.model('Course', courseSchema)

module.exports = Course