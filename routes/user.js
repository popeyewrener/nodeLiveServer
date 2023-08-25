const express = require("express");
const userRouter = require("../routers/userRouter");
const router = express.Router();
router.get("/:id",userRouter.get);
router.post("/",userRouter.post);

module.exports = router;