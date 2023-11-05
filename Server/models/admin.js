const mongoose = require('mongoose');

//schema
const adminSchema = new mongoose.Schema({
    username: String,
    password: String
})

//model
const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin