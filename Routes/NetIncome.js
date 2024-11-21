  // import express
const express = require("express")

  // import tax handler
const { NetIncomeCalcHandler } = require("./../Controllers/NetIncomeCalcController")

  // declare the router
const router = express.Router()

router.post("/", NetIncomeCalcHandler)

module.exports = router 