const http = require("http")
const express = require("express");
const path = require("path");
const socketIo = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", function(req, res){
    res.render("index")
})


// Socket.io

io.on("connection", (socket)=>{
    socket.on("message", (message)=>{
        io.emit("msg", message);
    });
});


server.listen(3000);