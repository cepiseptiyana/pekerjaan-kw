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

// MENAMBAH JUMLAH PADA KERANJANG SHOP

let product = [
  {
    image: `foto/nastar1.jpg`,
    title: `nastar`,
    price: 60000,
  },
  {
    image: `foto/salju.jpg`,
    title: `kue salju`,
    price: 60000,
  },
  {
    image: `foto/kacang.jpg`,
    title: `kue kacang`,
    price: 55000,
  },
];

// spread operator

let categories = [
  ...product.map((item) => {
    return item;
  }),
];

//! masukan input ke dalam element kanan-tengah
//! variable categori dimasukan inputan tersebut;

//! INCREMENT MENAMPILKAN NILAI AWAL;
let i = 0;
document.querySelector("#kanan-tengah").innerHTML = categories
  .map((item) => {
    //! DESTRUCTURING OBJECT
    let { image, title, price } = item;
    return `<div class="box">
                <div class='img-box'>
                  <img class='imagesz' src=${image}></img>
                </div>
            <div class='bottom'>
              <p>${title}</p>
              <p>Rp.${price}</p>
      <button onclick=addtocart(${i++}) class="btnCart">add to cart</button>
      </div>
      </div>`;
  })
  .join("");

// buat function onclick
let cart = [];

function addtocart(a) {
  // JIKA YANG DI KLIK BUTTON INDEX 2 MAKA, AKAN DI CETAK VARIABLE "CATEGORIS" SEBANYAK YANG DI KLIK;
  // KLIK BUTTON INDEX 2, MAKA CETAK "CATEGORIS" INDEX KE 2 PADA VARIABEL "CATEGORIS"
  cart.push(categories[a]);
  displayCart();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

//! FUNCTION MEMASUKAN KE DALAM KERANJANG

function displayCart() {
  let j = 0;
  total = 0;
  //! ANGKA UNTUK JUMLAH PESANAN
  document.querySelector("#shopping-cart .jumlah").innerHTML = cart.length;
  if (cart.length == 0) {
    //!  jika cart 0 masukan id cartitem
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    //! jika kosong element total harga
    document.querySelector(
      "#shopping-cart .slide-shop .container-krj .foot #total"
    ).innerHTML = `Rp.${0}`;
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        let { image, title, price } = items;
        //! jumlah total harga
        total += price;
        document.querySelector(
          "#shopping-cart .slide-shop .container-krj .foot #total"
        ).innerHTML = `Rp.${total}`;
        return `<div class="cart-item">
                  <div class="row-img">
                    <img src="${image}" alt="" class="rowing">
                  </div>
                  <p style="font-size: 18px;">${title}</p>
                  <h2 style="font-size: 1em;">Rp.${price}</h2>
                  <div class=delete onclick='delElement(${j++})'>hapus</div>
                </div>`;
      })
      .join("");
  }
}

//! mematikan stopPropagation pada element CartItem;
let elementDel = document.querySelector(
  "#shopping-cart .slide-shop .container-krj #cartItem"
);

elementDel.addEventListener("click", function (e) {
  e.stopPropagation();
});

// JUMBOTRON
// ANIMASI
// IMAGE GALERY
// PENGKONDISIAN
let containerFotoJumbotron = document.querySelector(".container-jumbotron");
let jumbotronImages = document.querySelector(".container-jumbotron .human");
containerFotoJumbotron.addEventListener("click", function (e) {
  if (e.target.className === "imagesz") {
    jumbotronImages.src = e.target.src;
    jumbotronImages.classList.add("switch");
    setTimeout(() => {
      jumbotronImages.classList.remove("switch");
    }, 400);
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
const images = ["nastar1.jpg", "salju.jpg", "kacang.jpg"];
const headings = ["Nastar", "Saljuuu", "Kacang"];
const descriptions = ["nastar", "kue salju manisss", "kue kacang enak"];

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
  if (nilaiAwal > images.length - 1) {
    nilaiAwal = 0;
    slide(nilaiAwal);
  } else {
    slide(nilaiAwal);
    console.log("ok");
  }
});

//! MARKETPLACE CARDS

let marketPlaceProduct = [
  {
    image: "foto/nastar1.jpg",
    description: "nastar",
  },
  {
    image: `foto/salju.jpg`,
    description: "kue salju",
  },
  {
    image: `foto/kacang.jpg`,
    description: "kue kacang",
  },
];

let marketPlaceProduct2 = [
  {
    image: "foto/nastar1.jpg",
    description: "nastar",
  },
  {
    image: `foto/salju.jpg`,
    description: "kue salju",
  },
  {
    image: `foto/kacang.jpg`,
    description: "kue kacang",
  },
];

document.getElementById("cardsMarketPlace").innerHTML = marketPlaceProduct
  .map((images) => {
    //! DESTRUCTURING OBJECT
    let { image, description } = images;
    return `<div class="col-sm a">
    <div class="card container-sport">
      <div class="card-bodi">
          <img src="${image}" alt="" class="sport">
        <p class="p text-capitalize">${description}</p>
      </div>
    </div>
  </div>`;
  })
  .join("");

document.getElementById("cardsMarketPlace2").innerHTML = marketPlaceProduct2
  .map((images) => {
    //! DESTRUCTURING OBJECT
    let { image, description } = images;
    return `<div class="col-sm a">
    <div class="card container-sport">
      <div class="card-bodi">
          <img src="${image}" alt="" class="sport">
        <p class="p text-capitalize">${description}</p>
      </div>
    </div>
  </div>`;
  })
  .join("");

document.querySelector(
  ".footer .container-fluid .bungkus #no-1"
).innerHTML = `<div>kami menyediakan kue lebaran 
enak nastar,kue salju,kue kacang,</div>
  `;

// ! tengah
document.querySelector(
  ".footer .container-fluid .bungkus #no-2"
).innerHTML = `<img src="foto/nastar1.jpg" alt="">
<img src="foto/salju.jpg" alt="">
<img src="foto/kacang.jpg" alt="">
`;

// ! kanan
document.querySelector(".footer .container-fluid .bungkus #no-3").innerHTML = `
<a href="https://wa.me/6285659519463/?text=Hello">klik untuk hubungi</a>
<h5 href="">gmail :</h5>
<p>cepifams3@gmail.com</p>`;
