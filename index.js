var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

});

var port = process.env.PORT || 3000; // start server using "npm start"

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('open two instances of "http://localhost:' + port + '" or "http://127.0.0.1:' + port + '" in your browser to start chat');
});
