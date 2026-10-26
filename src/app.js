const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors()) // Enable CORS for all routes first we have to install cors package using npm i cors

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/ai', aiRoutes);
app.use('/api/ai', aiRoutes);


module.exports = app; // export the app to use in server.js file