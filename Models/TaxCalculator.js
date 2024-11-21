  // very simple calculator functions

function calculateTax(income, taxRate ,res) {
    // Logic to calculate tax
  if (income < 0 || taxRate < 0) {
    return res.status(400).json({ 
      error: true,
      message: "Income or tax rate cannot be negative." 
    });
  }
  return (income * taxRate) / 100 
}
function calculateNetIncome(income, tax, bonus = 0) {
  return income - tax + bonus 
}

module.exports = { calculateTax, calculateNetIncome } 
