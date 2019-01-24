const express = require('express');

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
