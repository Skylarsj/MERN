const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    Author: { type: String }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;