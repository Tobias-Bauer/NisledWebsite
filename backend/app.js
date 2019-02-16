const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jsw = require('jsonwebtoken');
const checkAuth = require('./middleware/checkAuth');

const Post = require('./models/post');
const User = require('./models/user');

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
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.post('/api/user/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    })
    user.save().then(result => {
      res.status(201).json({
        message: 'User created',
        result: result
      })
    })
  })
});
app.post('/api/user/login', (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email }).then(user => {
    if (!user){
      //User not exists
      return res.status(401).json({
        message: "Auth failed"
      });
    }
    fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
  }).then(result => {
    if (!result) {
      return res.status(401).json({
        message: "Auth failed"
      });
    }
    const token = jsw.sign(
      { email: fetchedUser.email, userId: fetchedUser._id },
      '3NdEfkYB{wMC3;ordd*J4Wn9r7xnH#ekA$D6GAsiLdV3pe4j]r9?8cBnTZJ/[LC@',
      {expiresIn: '1h'}
    );
    res.status(200).json({
      token: token,
      //Time in Seconds
      expiresIn: 1*60*60
    })
  })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    })

});
app.post('/api/posts', checkAuth, (req, res, next) => {
  const post = new Post({
    content: req.body.content,
    imageUrl: req.body.imageUrl,
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});
app.get('/api/posts', (req, res, next) => {
  Post.find().sort({"_id": -1}).then((documents) => {
    res.json({documents});
  })
});
module.exports = app;
