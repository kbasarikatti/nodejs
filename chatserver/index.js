var net = require('net');
var sockets = [];
var s = net.Server(function (socket) {
  sockets.push(socket);

  socket.on('data', function (data) {
    for (var i = 0; i < sockets.length; i++) {
      if (socket === sockets[i]) continue;
      sockets[i].end(data);
    }
  });

  socket.on('end', function () {
    var i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });

}).listen(8080);