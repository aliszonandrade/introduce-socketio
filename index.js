var express = require("express");
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.set("view engine","ejs");

app.get("/", (req, res) => {
    res.render('index');
})

io.on("connection",(socket) => {
    socket.on("ola", (data) => {
        console.log(data);
    })

    socket.on("word", (data) => {
        console.log(data);
        socket.emit("result", data + " HEHEHE");
    })

    socket.on("disconnect", () => {
        console.log("Ele caiu fora. O bella ciao! :(" + socket.id);
    })

});

http.listen(8080, () => {
    console.log("APP RODANDO!");
})