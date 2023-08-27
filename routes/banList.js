const express = require("express");
const banListRouter = require("../routers/banListRouter");
const router = express.Router();


router.post('/get', banListRouter.getbanList);
router.post('/add', banListRouter.addbanList);
router.post("/delete", banListRouter.deletebanlist)


module.exports= router;