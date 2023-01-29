const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});



app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Server is running");
})

// socket connection 
io.on("connection",(socket) => {
    socket.emit("me",socket.id);
    
    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
    });

    socket.on("calluser", ({ userToCall, singalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: singalData, from, name });

    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    });


})

server.listen(PORT, () => console.log(`Server is listeingin on ${PORT}`));