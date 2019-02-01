const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Post = require('./models/post');

mongoose.connect("mongodb+srv://Tobi:DySlf0gxZ45DnlVb@nisled-rou79.mongodb.net/nisled?retryWrites=true")
.then(()=> {
  console.log('Connected to MongoDB')
})
.catch(() => {
  console.log('Connection failed')
})

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    content: req.body.content,
    imageUrl: req.body.imageUrl,
  })
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
})
app.get('/api/posts', (req, res, next) => {
  Post.find().sort({"_id": -1}).then((documents) => {
    console.log(documents);
    res.json({documents})
  })
})
module.exports = app;
