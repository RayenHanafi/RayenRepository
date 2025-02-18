function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);
  return `rgb(${r}, ${g}, ${b})`; 
}

document.getElementsByClassName('clickableItem')[0].addEventListener("click", function () {
  this.style.color = randomColor();
});
document.getElementsByClassName('clickableItem')[1].addEventListener("click", function () {
  this.style.color = randomColor();
});
document.getElementsByClassName('clickableItem')[2].addEventListener("click", function () {
  this.style.color = randomColor();
});
document.getElementsByClassName('clickableItem')[3].addEventListener("click", function () {
  this.style.color = randomColor();
});
