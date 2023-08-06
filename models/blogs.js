const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
blogTitle : { type:  String, description: "Required Field", required: true },
blogText : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('blogs', blogsSchema);