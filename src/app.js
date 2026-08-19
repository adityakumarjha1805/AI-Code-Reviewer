const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/ai', aiRoutes);


module.exports = app; // export the app to use in server.js file