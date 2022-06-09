const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const blogPostSchema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true
  },
  header: {
    type: String,
    required: true,
    trim: true
  },
  subheader: {
    type: String,
    trim: true
  },
  body: {
    type: String,
    trim: true
  }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;