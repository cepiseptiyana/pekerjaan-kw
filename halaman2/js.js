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

// CONTACT US KANAN WHATSAPP
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
let shCart = document.querySelector("#shopping-cart .i .feather");
let slideShop = document.querySelector(
  ".nav-container #shopping-cart .slide-shop"
);

window.addEventListener("click", function (e) {
  //! jika slideShop mengandung === e.target = slideShop display block;
  if (e.target == shCart || slideShop.contains(e.target)) {
    slideShop.style.display = "block";
  } else {
    slideShop.style.display = "none";
  }
});

//! MARKETPLACE CARDS

let marketPlaceProduct = [
  {
    image: "../foto/nastar1.jpg",
    description: "nastar",
  },
  {
    image: `../foto/salju.jpg`,
    description: "kue salju",
  },
  {
    image: `../foto/kacang.jpg`,
    description: "kue kacang",
  },
];

let marketPlaceProduct2 = [
  {
    image: "../foto/nastar1.jpg",
    description: "nastar",
  },
  {
    image: `../foto/salju.jpg`,
    description: "kue salju",
  },
  {
    image: `../foto/kacang.jpg`,
    description: "kue kacang",
  },
];

// ! PRODUK JUMBOTRON
// ! tahapan pembuatan
// ! masukan element ke row

document.querySelector(".produk-br-1").innerHTML = marketPlaceProduct
  .map((gambar) => {
    let { image, description } = gambar;
    return `<div class="col-sm produkss">
  <div class="card">
    <div class="card-produkss text-center">
        <img src="${image}" alt="" class="produksss">
      <p class="p text-capitalize">${description}</p>
      <a href="#" class="btn btn-primary">add to cart</a>
    </div>
  </div>
</div>`;
  })
  .join("");

document.querySelector(".produk-br-2").innerHTML = marketPlaceProduct2
  .map((gambar) => {
    let { image, description } = gambar;
    return `<div class="col-sm produkss">
  <div class="card">
    <div class="card-produkss text-center">
        <img src="${image}" alt="" class="produksss">
      <p class="p text-capitalize">${description}</p>
      <a href="#" class="btn btn-primary">add to cart</a>
    </div>
  </div>
</div>`;
  })
  .join("");

// ! footer
// ! kiri
document.querySelector(
  ".footer .container-fluid .bungkus #no-1"
).innerHTML = `<div>kami menyediakan kue lebaran 
enak nastar,kue salju,kue kacang,</div>
`;

// ! tengah
document.querySelector(
  ".footer .container-fluid .bungkus #no-2"
).innerHTML = `<img src="../foto/nastar1.jpg" alt="">
<img src="../foto/salju.jpg" alt="">
<img src="../foto/kacang.jpg" alt="">
`;

// ! kanan
document.querySelector(".footer .container-fluid .bungkus #no-3").innerHTML = `
<a href="">0856******</a>
<h5 href="">gmail</h5>
<p>cepifams3@gmail.com</p>`;
