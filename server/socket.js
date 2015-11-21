module.exports = function (server) {
  //setup socket io

  var io = require('socket.io')(server);

  io.on('connection',function (socket) {
    socket.emit('welcome','You are now live');
  });
};
