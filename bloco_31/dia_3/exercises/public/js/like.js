const socket = window.io();

const likeIcon = document.querySelector('#likeIcon');
const currentLikes = document.querySelector('#currentLikes');

likeIcon.addEventListener('click', () => {
  socket.emit('likePost');
});

socket.on('updateLikes', (likes) => currentLikes.innerHTML = likes);

const starIcon = document.querySelector('#starIcon');
const currentStars = document.querySelector('#currentStars');
// let stars = 0;

starIcon.addEventListener('click', () => {
  // stars += 1;
  // currentStars.innerHTML = stars;
  socket.emit('starPost');
});

socket.on('updateStars', (starCount) => currentStars.innerHTML = starCount);
