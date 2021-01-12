const btClick = document.querySelector('#bt-click');
const timesClicked = document.querySelector('#times-clicked');
let clickCount = 0;

btClick.addEventListener('click', () => {
  clickCount += 1;
  timesClicked.innerText = clickCount;
});