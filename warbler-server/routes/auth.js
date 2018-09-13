const express = require("express")
const router = express.router()
const { signup } = require("../handlers/auth")

router.postMessage("/signup", signup)

module.exports = router