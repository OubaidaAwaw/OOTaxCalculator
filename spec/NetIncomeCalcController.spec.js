  // import the controllers to test
const NetIncomeController = require('../Controllers/NetIncomeCalcController') 

  // mock response to avoid errors "no response"
const mockRes = () => {
  const res = {} 
  res.status = jasmine.createSpy('status').and.returnValue(res) 
  res.json = jasmine.createSpy('json')   
  return res 
} 

describe("calculateNetIncome",  () => {
  it("should calculate net income correctly",async () => {
    const mockRequest = { body: { income: 50000, tax: 5000, bonus: 2000 } } 
    const res = mockRes() 
    await NetIncomeController.NetIncomeCalcHandler(mockRequest, res) 
    expect(res.status).toHaveBeenCalledWith(200) 
    expect(res.json).toHaveBeenCalledWith({ netIncome: 47000 })  
  }) 

  it("should handle zero bonus correctly",async () => {
    const mockRequest = { body: { income: 50000, tax: 5000, bonus: 0 } } 
    const res = mockRes() 
    await NetIncomeController.NetIncomeCalcHandler(mockRequest, res) 
    expect(res.status).toHaveBeenCalledWith(200) 
    expect(res.json).toHaveBeenCalledWith({ netIncome: 45000 })  
  }) 
}) 