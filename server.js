const express = require('express'),
    app = express(),
    server = require("http").Server(app),
    io = require("socket.io")(server);
usernames = [];


server.listen(process.env.PORT || 3001);

console.log("Server running...");

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on("connection", function (socket) {
    console.log("Socket Connected...");

    socket.on("new user", function (data, callback) {
        if (usernames.indexOf(data) != -1) {
            callback(false);
        } else {
            callback(true);
            socket.username = data;
            usernames.push(socket.username);
            updateUsernames();
        }
    });

    // Update Usernames
    function updateUsernames(params) {
        io.sockets.emit("usernames", usernames);
    }

    // Send Message
    socket.on("send message", function (data) {
        io.sockets.emit("new message", { msg: data.msg, user: socket.username, id: socket.id, count: data.count });
    });

    socket.on('typing', (data) => {
        io.sockets.emit('typing', (socket.username));
    });

    // Disconnect
    socket.on("disconnect", function (data) {
        if (!socket.username) {
            return;
        }

        usernames.splice(usernames.indexOf(socket.username), 1);
        updateUsernames();
    });

});







