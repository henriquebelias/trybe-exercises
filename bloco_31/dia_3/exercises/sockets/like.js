module.exports = (io) => io.on('connection', (socket) => {
  let currentLikes = 0;
  let currentStars = 0;

  socket.on('likePost', () => {
    currentLikes += 1;

    // socket.emit('updateLikes', currentLikes); // apenas para o cliente que efetuou o evento
    io.emit('updateLikes', currentLikes) // para todos os clientes conectados
  });

  socket.on('starPost', () => {
    currentStars += 1;

    socket.broadcast.emit('updateStars', currentStars);
  });
});
