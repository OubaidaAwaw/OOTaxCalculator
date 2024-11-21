  // import calculate function
const { calculateNetIncome } = require("./../Models/TaxCalculator") 

const NetIncomeCalcHandler = async (req, res) => {
    // get the data from user
  const { income, tax, bonus } = req.body 
  try {
      // get the net income result
    const netIncome = await calculateNetIncome(income, tax, bonus) 
      // send the result to the user
    res.status(200).json({ netIncome }) 
  } catch (error) {
      // throw the errors
    res.status(400).json({ 
      "error": true,
      "message": error.message
    }) 
  }
}

module.exports = { NetIncomeCalcHandler }