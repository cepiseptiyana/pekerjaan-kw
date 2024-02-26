// NAVBAR
// ANIMASI PADA "LOGO" NAVBAR
let logo = document.querySelector(".logo");
let animasiLogoNavbar = [...logo.textContent]
  .map((el) => `<span>${el}</span>`)
  .join("");
logo.innerHTML = animasiLogoNavbar;

// RESOURCES DOWN
let containerBox = document.querySelector(".nav-container .box.toggle ");
window.addEventListener("click", function (event) {
  if (event.target.className === "click-p")
    return (containerBox.style.display = "block");
  return (containerBox.style.display = "none");
});

// CONTACT US KANAN
let contact = document.querySelector(".container-login :nth-child(1)");
let containerContact = document.querySelector(".container-contact");
contact.addEventListener("click", function () {
  containerContact.style.display = "block";
});
containerContact.addEventListener("click", function (event) {
  if (event.target.className === "close")
    return (containerContact.style.display = "none");
  return (containerContact.style.display = "block");
});

// CONTACT WHATSAPP
let noWa = document.querySelector(
  ".container-contact .contact-1 .contact .whatsapp"
);

// SEARCH
let searchButton = document.querySelector(".nav-container .container-search");
let paragparp = document.querySelector(".paragraph3");
window.addEventListener("click", function (event) {
  if (
    event.target.className === "paragraph3" ||
    event.target.className === "search"
  )
    return (searchButton.style.top = "100%");
  return (searchButton.style.top = "-100px");
});

// MENU-SLIDE
// CARA INI DIGUNAKAN KETIKA TAG ELEMEN HTML BERUPA SVG
// KARENA JIKA MENGGUNAKAN WINDOW.ADDEVENTLISTENER TIDAK BISA MENGAMBIL ELEMEN SVG KARENA TIDAK MEMILIKI CLASS / ID
let menuSliderMenu = document.querySelector(".nav-container .menu-slide");
let hamburgerMenu = document.querySelector("#hamburger");
hamburgerMenu.addEventListener("click", function (event) {
  menuSliderMenu.style.right = "0";
  event.preventDefault();
});

// MENU-SLIDE KETIKA DI KLIK DI LUAR MAKA DISPLAY NONE
window.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !menuSliderMenu.contains(e.target)) {
    menuSliderMenu.style.right = "-500px";
  }
});

// SHOPPING-CART NAVBAR
let jm = 0;
let shCart = document.querySelector(".nav-container #shopping-cart");
let shJumlah = document.querySelector(".nav-container #shopping-cart .jumlah");
let slideShop = document.querySelector(
  ".nav-container #shopping-cart .slide-shop"
);
let containerJumlahKeranjang = document.querySelector(
  ".jumbotron .kanan-tengah .container"
);

// KLIK OPEN SLIDE SHOPPING
shCart.addEventListener("click", function (e) {
  slideShop.style.display = "block";
  e.preventDefault();
});
// KLIK CLOSE SLIDE SHOPPING
document.addEventListener("click", function (e) {
  if (!shCart.contains(e.target)) return (slideShop.style.display = "none");
});
// MENAMBAH JUMLAH PADA KERANJANG SHOP
let keranjangSlide = document.querySelector(
  ".nav-container #shopping-cart .slide-shop .container-krj .keranjang"
);
let imgKrj = ["foto/strobery.jpg", "foto/CAMERA.jpg"];
containerJumlahKeranjang.addEventListener("click", function (event) {
  if (event.target.className === "btn btn-info 1") {
    jm += 1;
    shJumlah.style.display = "block";
    keranjangSlide.style.backgroundImage = `url(${imgKrj[0]})`;
  }
  if (event.target.className === "btn btn-info 2") {
    jm += 1;
    shJumlah.style.display = "block";
    keranjangSlide.style.backgroundImage = `url(${imgKrj[1]})`;
  }
  shJumlah.innerHTML = jm;
  event.preventDefault();
});

// JUMBOTRON
// ANIMASI
// IMAGE GALERY
// PENGKONDISIAN
let containerFotoJumbotron = document.querySelector(".container-jumbotron");
let jumbotronImages = document.querySelector(".container-jumbotron .human");
const arrayFoto = ["strobery.jpg", "CAMERA.jpg", "wee.jpg"];
let [a, b, c] = arrayFoto;
function ubahFoto(nilai) {
  jumbotronImages.style.backgroundImage = `url(foto/${nilai})`;
  jumbotronImages.classList.add("switch");
  setTimeout(function () {
    jumbotronImages.classList.remove("switch");
  });
}
containerFotoJumbotron.addEventListener("click", function (event) {
  if (event.target.className === "image-1 mb-2") return ubahFoto(a);
  if (event.target.className === "image-2 mb-2") return ubahFoto(b);
  if (event.target.className === "image-3 mb-2") return ubahFoto(c);
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
const images = ["strobery.jpg", "CAMERA.jpg", "wee.jpg"];
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
// PENGKONDISIAN
let nilaiAwal = 0;
arrLeft.addEventListener("click", function () {
  // decrement image id
  nilaiAwal -= 1;
  // check if id is smaller than the number of available slides
  nilaiAwal < 0 ? (nilaiAwal = images.length - 1) : console.log("false");
  // run the slide function
  slide(nilaiAwal);
});
// add click even to left arrow
arrRight.addEventListener("click", function () {
  // increment image id
  nilaiAwal++;
  // check if id is greater than the number of available slides
  nilaiAwal > images.length - 1 ? (nilaiAwal = 0) : console.log("false");
  // run the slide function
  slide(nilaiAwal);
});
