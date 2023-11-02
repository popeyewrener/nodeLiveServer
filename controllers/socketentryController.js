let handleSocket = require("./../handlers/socketHandler");
class socketentryController{
    constructor(io){
        this.io = io;

        io.on("connection",(socket)=>{
            //console.log(socket.handshake.headers)
   const userId = socket.handshake.headers.userid

  // Associate the user ID with the socket
  socket.userId = userId;
  if (!userId) {
    console.log('Connection rejected: No user ID provided in the handshake query.');
    socket.disconnect(true); // Disconnect the socket
    return;
  }
  console.log(socket.userId)
            handleSocket.handleSocket(this.io,socket, userId);
        })
    }


}
module.exports = socketentryController;
