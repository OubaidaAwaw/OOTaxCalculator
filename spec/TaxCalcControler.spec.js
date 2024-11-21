  // import the controllers to test
const taxController = require('../Controllers/TaxCalcControler') 

  // mock response to avoid errors "no response"
const mockRes = () => {
  const res = {} 
  res.status = jasmine.createSpy('status').and.returnValue(res) 
  res.json = jasmine.createSpy('json')  
  return res 
} 

describe("calculateTax", () => {
  it("should calculate tax correctly for valid inputs",async () => {
    const mockRequest = { body: { income: 50000, taxRate: 10 } } 
    const res = mockRes() 
    await taxController.taxHandler(mockRequest, res) 
    expect(res.status).toHaveBeenCalledWith(200) 
    expect(res.json).toHaveBeenCalledWith({ tax: 5000 }) 
  }) 
  
  it("should return an error for invalid inputs", () => {
    const mockRequest = { body: { income: -50000, taxRate: 10 } } 
    const res = mockRes() 
    taxController.taxHandler(mockRequest, res) 
    expect(res.status).toHaveBeenCalledWith(400) 
    expect(res.json).toHaveBeenCalledWith({ 
      error: true,
      message: "Income or tax rate cannot be negative." 
    }) 
  }) 
}) 