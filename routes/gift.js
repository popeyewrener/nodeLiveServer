const express = require("express");
const giftRouter = require("../routers/giftRouter");

const router = express.Router();

router.post("/get",giftRouter.getgifts);
router.post("/add", giftRouter.addGifttoRoom)

module.exports = router;