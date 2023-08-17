const express = require("express");
const mainRouter = require("../functions/mainRouter");
const router = express.Router();
router.get("/",mainRouter.get)

module.exports = router;