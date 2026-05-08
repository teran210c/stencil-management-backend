const express = require("express")

const router = express.Router()

const controller = require("../controllers/stencilsController")

router.get("/", controller.getStencils)

module.exports = router