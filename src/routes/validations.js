const express = require("express")

const router = express.Router()

const controller = require("../controllers/validationController")

const { route } = require("./stencils")

router.post("/start-validation/:stencilId", controller.startValidation)

router.get("/:stencilId", controller.getValidationById)

router.get("/:validationId/details", controller.getValidationDetails)

router.put("/checklist/:itemId", controller.updateChecklistItem)

router.put("/:validationId/complete", controller.completeValidation)

router.put(
    "/refresh-statuses",
    controller.refreshStencilStatuses
)

router.get(
    "/stencil/:stencilId/latest",
    controller.getLatestValidationByStencil
)

module.exports = router