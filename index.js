const express = require('express')
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
const app = express()
const port = 3000

const authRoutes = require('./src/routes/auth.js');
const categoryRoutes = require('./src/routes/categories');
const { dbConnect } = require('./src/config/db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes)
app.use('/api/categories', categoryRoutes)

dbConnect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

