const express = require("express")

const router = express.Router()

const controller = require("../controllers/stencilsController")

router.get("/", controller.getStencils)

const getStencilsTotal = require("../controlles/stencils")

router.get("/total", controller.getStencilsTotal)

module.exports = router