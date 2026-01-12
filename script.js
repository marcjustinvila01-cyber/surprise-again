// IMAGE SLIDER - The "images/" prefix looks inside your album folder
const images = [
  "images/gf1.png", 
  "images/gf2.png", 
  "images/gf3.png", 
  "images/gf4.png",
  "images/gf5.png",
  "images/gf6.png"
];

let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[index];
}

// LOVE LETTER POPUP
function openLetter() {
  document.getElementById("letterModal").style.display = "flex";
}

function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
}

// START MUSIC AND HIDE OVERLAY
function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play().catch(error => console.log("Music play blocked:", error));
  document.querySelector(".tap-overlay").style.display = "none";
}