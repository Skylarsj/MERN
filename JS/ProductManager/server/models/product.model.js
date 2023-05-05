const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    Price: { type: Number },
    Description: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Person', PersonSchema);