const express = require("express")

const router = express.Router()

const controller = require("../controllers/validationController")

const { route } = require("./stencils")

router.post("/start-validation/:stencilId", controller.startValidation)

router.get("/:stencilId", controller.getValidationById)

module.exports = router