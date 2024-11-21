  // import calculate function
const { calculateTax } = require("./../Models/TaxCalculator") 

const taxHandler = (req, res) => {
    // get the data from user
  const { income, taxRate } = req.body 
  try {
      // get the tax calculation
    const tax = calculateTax(income, taxRate,res) 
      // send the result
    res.status(200).json({ tax }) 
  } catch (error) {
      // throw the error
    res.status(400).json({ 
      'error': true,
      'message': error.message 
    }) 
  }
}

module.exports = { taxHandler }