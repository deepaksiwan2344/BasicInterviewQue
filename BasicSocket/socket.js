// Socket.io is a JavaScript library that allows real-time, bidirectional, and event-based 
// communication between a client and a server over a web socket connection.

const { Socket } = require("dgram")

// In Socket.io, socket.on and socket.emit are two methods used to send and receive messages between the 
// client and server.

//socket.on is used to listen for incoming messages on a socket.
//It takes two arguments - the event name and a callback function to handle the message.

example
Socket.on('chat message', function(msg){
    console.log('recieved message:',msg)
})

//socket.emit is used to send a message from the client to the server.
//For example, the following code sends a chat message event to the server with a message payload:

Socket.emit('chat message',' Hello Server');



// In summary, socket.on is used to listen for incoming messages on a socket, while socket.emit is used to 
// send messages from the client to the server. Both methods are essential for bidirectional communication 
// between the client and server in Socket.io.


