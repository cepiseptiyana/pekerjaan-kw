// ANIMASI PADA "LOGO" NAVBAR
let logo = document.querySelector(".logo");
let animasiLogoNavbar = [...logo.textContent]
  .map((el) => `<span>${el}</span>`)
  .join("");
logo.innerHTML = animasiLogoNavbar;

// ANIMASI TAG "P" PADA NAVBAR
let drop = document.querySelector(".kontak .box");
let p = document.querySelector(".kontak p");
p.addEventListener("click", function () {
  drop.classList.toggle("toggle");
});

// ANIMASI JUMBOTRON KANAN
// IMAGE GALERY
let leftFoto = document.getElementsByClassName("img")[0];
let switchFoto = document.querySelector(".kanan-tengah .container");
switchFoto.addEventListener("click", function (event) {
  if (event.target.className == "image") {
    leftFoto.src = event.target.src;
    leftFoto.classList.add("fade");
    setTimeout(function () {
      leftFoto.classList.remove("fade");
    }, 100);
  }
});

// SLIDER
// IMAGE GALERY
let slider = document.querySelector(".image-slider");
let arrLeft = document.querySelector(".arrow-left");
let arrRight = document.querySelector(".arrow-right");
let heading = document.querySelector(".caption h1");
let description = document.querySelector(".caption p");

// DATA FOR SLIDER
const images = ["1.png", "CAMERA.jpg", "wee.jpg"];
const headings = ["New York, USA", "Tokyo, Japan", "Dubai, UAE"];
const descriptions = [
  "the city that never sleeps",
  "the city of anime",
  "home to the tallest skyscraper",
];

// SLIDER ID
// the slider function
function slide(id) {
  // set the background image
  slider.style.backgroundImage = `url(foto/${images[id]})`;
  // add image fade animation
  slider.classList.add("image-fade");
  // remove animation setelah di gunakan
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);
  // change HEADING
  heading.innerHTML = headings[id];
  // CHANGE DESCRIPTION
  description.innerHTML = descriptions[id];
}

// add click even to left arrow
let id = 0;
arrLeft.addEventListener("click", function () {
  // decrement image id
  id--;
  // check if id is smaller than the number of available slides
  id < 0 ? (id = images.length - 1) : "false";
  // run the slide function
  slide(id);
});
// add click even to left arrow
arrRight.addEventListener("click", function () {
  // increment image id
  id++;
  // check if id is greater than the number of available slides
  id > images.length - 1 ? (id = 0) : "false";
  // run the slide function
  slide(id);
});
