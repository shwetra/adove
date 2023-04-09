const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");
const User = require("./src/User.js");
const Post=require("./src/Post.js")

require("dotenv").config()
const PORT = process.env.PORT ;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors())


// Create a new user
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  });

  app.get('/allusers', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Retrieve user
  app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found.');
    res.send(user);
  });
  
  // Update name and bio 
  app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      bio: req.body.bio,
      updated_at: Date.now()
    }, { new: true });
    if (!user) return res.status(404).send('User not found.');
    res.send(user);
  });
  
  // Delete user
  app.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) return res.status(404).send('User not found.');
    res.send(user);
  });
  
  //  total number of users
  app.get('/analytics/users', async (req, res) => {
    const count = await User.countDocuments();
    res.send({ total_users: count });
  });

//second post
  app.post('/posts', async (req, res) => {
    try {
      const { email, content } = req.body;
  
      // Check user
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Create a new post
      const post = new Post({ email, content });
      await post.save();
  
      res.status(201).json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  //find by id
  app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('post not found.');
    res.send(post);
  });

// find all users post 
  app.get('/allpost', async (req, res) => {
    try {
      const users = await Post.find();
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
// update content by id 
app.put('/posts/:id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, {
    content: req.body.content,
    updated_at: Date.now()
  }, { new: true });
  if (!post) return res.status(404).send('Post is not found.');
  res.send(post);
});

//delete post by id
app.delete('/posts/:id', async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id);
  if (!post) return res.status(404).send('post is not found.');
  res.send("post is deleted");
});

 //  total number of posts
 app.get('/analytics/posts', async (req, res) => {
  const count = await Post.countDocuments();
  res.send({ total_post: count });
});

app.get('/analytics/users/top-active', async (req, res) => {
  try {
    const topUsers = await Post.aggregate([
      { $group: { _id: '$email', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);
    
    res.status(200).json({ topUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT || 6000, () => {
  dbConnect();
  console.log(`Server started on port ${PORT}`);
});