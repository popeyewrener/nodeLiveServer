const express = require("express");
const broadcasterRouter = require("../routers/broadcasterRouter");
const router = express.Router();


router.post('/get', broadcasterRouter.getbroadcasterlist);
router.post('/add', broadcasterRouter.addbroadcasterlist);
router.post("/delete", broadcasterRouter.deletebroadcastlist)


module.exports= router;