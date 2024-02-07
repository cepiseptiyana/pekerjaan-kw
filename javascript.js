// NAVBAR
// ANIMASI PADA "LOGO" NAVBAR
let logo = document.querySelector(".logo");
let animasiLogoNavbar = [...logo.textContent]
  .map((el) => `<span>${el}</span>`)
  .join("");
logo.innerHTML = animasiLogoNavbar;

// STYLE
// PARAGRAPH KONTAK
let containerBox = document.querySelector(
  ".nav-container .menu .menu-cover .kontak .box "
);
window.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.className === "click-p")
    return (containerBox.style.display = "block");
  return (containerBox.style.display = "none");
});

// JUMBOTRON
// ANIMASI
// IMAGE GALERY

let containerFotoJumbotron = document.querySelector(".container-jumbotron");
let jumbotronImages = document.querySelector(".container-jumbotron .human");

containerFotoJumbotron.addEventListener("click", function (event) {
  if (event.target.className === "image") {
    jumbotronImages.src = event.target.src;
    jumbotronImages.classList.add("switch");
    setTimeout(function () {
      jumbotronImages.classList.remove("switch");
    }, 500);
  }
});

// MARKETPLACE
// ANIMASI
// SLIDER

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
  slider.classList.add("img");
  // remove animation setelah di gunakan
  setTimeout(() => {
    slider.classList.remove("img");
  }, 500);
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
