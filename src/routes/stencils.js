const express = require("express")

const router = express.Router()

const controller = require("../controllers/stencilsController")

router.get("/", controller.getStencils)

router.get("/dashboard", controller.getDashboardData)

router.get(
    "/expiring",
    controller.getExpiringStencils
)

router.get(
    "/recent-activity",
    controller.getRecentActivity
)

router.get("/:stencilId", controller.getStencilById)



module.exports = router