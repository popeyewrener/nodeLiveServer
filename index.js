// npm install express cors cookie-parser

const express = require("express");
const http = require("http");
const PORT = require("./constants");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const router = require("./routes");
const userrouter = require("./routes/user");
const io = socket(server);
const socketentryController = require("./controllers/socketentryController");
const mongo = require("./connectors/mongoConnector");
const roomRouter = require("./routes/room");
const mongooseConnector = require("./connectors/mongooseConnector");
const commentRouter = require("./routes/comment");
const banListRouter = require("./routes/banList");
const broadcasterRouter = require("./routes/broadcasterList");
const viewerRouter = require("./routes/viewer");
const giftRouter = require("./routes/gift");
const dburl = 'mongodb://livesignal:livesignal@109.123.235.27:27017/livesignal';
const dotenv = require("dotenv").config();
const databaseUrl = process.env.SERVERURL;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/",router);
app.use("/user",userrouter );
app.use("/room", roomRouter);
app.use("/comment", commentRouter);
app.use("/banList", banListRouter);
app.use("/broadcaster", broadcasterRouter);
app.use("/viewer", viewerRouter );
app.use("/gift", giftRouter)
mongo.connect(databaseUrl);
mongooseConnector(databaseUrl);

//console.log(db);
const socketController = new socketentryController(io);


server.listen(PORT.PORT, ()=>{
    console.log(`http://localhost:${PORT.PORT}`)
})