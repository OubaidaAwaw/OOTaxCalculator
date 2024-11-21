  // import express
const express = require("express")

  // import tax handler
const { taxHandler } = require("./../Controllers/TaxCalcControler")

  // declare the router
const router = express.Router()

router.post("/", taxHandler)

module.exports = router 