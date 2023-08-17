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
const io = socket(server);
const socketentryController = require("./controllers/socketentryController");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/",router)
const socketController = new socketentryController(io);


server.listen(PORT.PORT, ()=>{
    console.log(`http://localhost:${PORT.PORT}`)
})