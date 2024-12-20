const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the schema instance and include all the objects in it.
const BlogSchema = new Schema({
    title:{type: String, required: true},
    snippet: {type: String, required: true},
    body: {type: String, required: true}
}, {timestamps: true});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;