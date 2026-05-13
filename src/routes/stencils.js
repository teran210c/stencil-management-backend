const express = require("express")

const router = express.Router()

const controller = require("../controllers/stencilsController")

router.get("/", controller.getStencils)

router.get("/total", controller.getStencilsTotal)

module.exports = router