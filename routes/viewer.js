const express = require("express");
const viewerRouter = require("../routers/viewerRouter");

const router = express.Router();


router.post('/get', viewerRouter.get);
router.post('/add', viewerRouter.add);
router.post("/delete", viewerRouter.remove)


module.exports= router;