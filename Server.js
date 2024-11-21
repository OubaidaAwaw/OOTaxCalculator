  // import express
const express = require('express') 

  // declare server
const app = express() 

  // Parse JSON request bodies
app.use(express.json()) 

// Route to calculate tax + -
app.use('/calculate-tax', require("./Routes/CalculateTax")) 

// Route to calculate net income / *
app.use('/calculate-net-income', require('./Routes/NetIncome')) 

  // listen on port 3000
app.listen(3000)

module.exports = app 