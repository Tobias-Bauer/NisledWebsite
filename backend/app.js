const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Tobi:DySlf0gxZ45DnlVb@nisled-rou79.mongodb.net/test?retryWrites=true")
.then(()=> {
  console.log('Connected to MongoDB')
})
.catch(() => {
  console.log('Connection failed')
})

const app = express();
app.use((req, res, next) => {
  next();
})
app.use('/api/news', (req, res, next) => {
  const message = "Hello I`m the express server";
  res.status(200).json({
    message: "Have fun!",
    news: message
  })
})
module.exports = app;
