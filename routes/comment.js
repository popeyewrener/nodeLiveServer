const express = require("express");
const router = express.Router();

const commentRouter = require("./../functions/commentRouter")
router.post('/create', commentRouter.post);
module.exports= router;