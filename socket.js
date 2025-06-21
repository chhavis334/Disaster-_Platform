let ioInstance;

exports.setupSocket = (io) => {
  ioInstance = io;
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
  });
};

exports.emitEvent = (event, payload) => {
  if (ioInstance) {
    ioInstance.emit(event, payload);
  }
};
