const express = require("express");
const router = express.Router();
const commentRouter = require("../routers/commentRouter")
router.post('/create', commentRouter.postCreateComment);
router.post("/getallComment", commentRouter.getAllComment);

module.exports= router;