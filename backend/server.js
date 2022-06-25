const express = require('express')
const app = express()
const connectdb = require('./config/db')
require('dotenv').config()
const port =process.env.PORT || 4000;
connectdb();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})