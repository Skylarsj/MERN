const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    Author: { type: String,
    required:[
        true,  "Name is Required"],
    minLength: [3, "Min length must be three characters"] }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;