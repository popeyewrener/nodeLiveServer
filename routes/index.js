const express = require("express");
const mainRouter = require("../routers/mainRouter");
const router = express.Router();
router.get("/",mainRouter.get);
router.post("/",mainRouter.post);

module.exports = router;