const bgColor = document.querySelector('#background-color');
const txColor = document.querySelector('#color');
const smallFont = document.querySelector('#small-font');
const normalFont = document.querySelector('#normal-font');
const largeFont = document.querySelector('#large-font');
const single = document.querySelector('#single');
const onePointFive = document.querySelector('#one-point-five');
const double = document.querySelector('#double');
const sanSerif = document.querySelector('#sans-serif');
const serif = document.querySelector('#serif');

window.onload = function () {
  document.body.style.backgroundColor = localStorage.getItem('bgcolor');
  document.body.style.color = localStorage.getItem('txcolor');
  document.body.style.fontSize = localStorage.getItem('fontsize');
  document.body.style.lineHeight = localStorage.getItem('lineheight');
  localStorage.ftfamily = localStorage.getItem('ftfamily');
}

function changeBgColor () {
  document.body.style.backgroundColor = bgColor.value;
  localStorage.bgcolor = bgColor.value;
}
bgColor.addEventListener('mouseleave', changeBgColor);

function changeTxColor () {
  document.body.style.color = txColor.value;
  localStorage.txcolor = txColor.value;
}
txColor.addEventListener('mouseleave', changeTxColor);

function fontSizeSmall () {
  document.body.style.fontSize = 'small';
  localStorage.fontsize = 'small';
}
smallFont.addEventListener('click', fontSizeSmall);

function fontSizeNormal () {
  document.body.style.fontSize = 'medium';
  localStorage.fontsize = 'medium';
}
normalFont.addEventListener('click', fontSizeNormal);

function fontSizeLarge () {
  document.body.style.fontSize = 'large';
  localStorage.fontsize = 'large';
}
largeFont.addEventListener('click', fontSizeLarge);

function lineHeightSingle () {
  document.body.style.lineHeight = '1.0';
  localStorage.lineheight = '1.0'
}
single.addEventListener('click', lineHeightSingle);

function lineHeightOnePointFive () {
  document.body.style.lineHeight = '1.5';
  localStorage.lineheight = '1.5';
}
onePointFive.addEventListener('click', lineHeightOnePointFive);

function lineHeightDouble () {
  document.body.style.lineHeight = '2';
  localStorage.lineHeight = '2'
}
double.addEventListener('click', lineHeightDouble);

function changeToSansSerif() {
  document.body.style.fontFamily = sanSerif.value;
  localStorage.ftfamily = sanSerif.value;
}
sanSerif.addEventListener('click', changeToSansSerif);

function changeToSerif() {
  document.body.style.fontFamily = serif.value;
  localStorage.ftfamily = serif.value;
}
serif.addEventListener('click', changeToSerif);