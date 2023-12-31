const express = require("express");
const roomRouter = require("../routers/roomRouter");
const router = express.Router();
router.get("/:id",roomRouter.get);
router.post("/",roomRouter.post);
router.get("/mesh/all", roomRouter.getall)

module.exports = router;