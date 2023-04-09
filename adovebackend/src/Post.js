const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  content:{
    type: String,
    required: true,
    maxlength: 300,
  },
  likes:{
    type: Number,
    min:0,
    default:0,
  },
}, {timestamps:true})

const Post = mongoose.model('post', postSchema)

module.exports = Post;
