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
let shCart = document.querySelector("#shopping-cart");
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
    price: 50000,
    promo: "Promo30%",
  },
  {
    image: `../foto/salju.jpg`,
    description: "kue salju",
    price: 45000,
    promo: "Promo20%",
  },
  {
    image: `../foto/kacang.jpg`,
    description: "kue kacang",
    price: 40000,
    promo: "Promo25%",
  },
  {
    image: `../foto/salju.jpg`,
    description: "Brownies",
    price: 50000,
    promo: "Promo45%",
  },
  {
    image: "../foto/nastar1.jpg",
    description: "kue salju",
    price: 40000,
    promo: "Promo20%",
  },
  {
    image: `../foto/kacang.jpg`,
    description: "kue kacang",
    price: 45000,
    promo: "Promo25%",
  },
];

let market1 = [...marketPlaceProduct].map((e) => {
  return e;
});

// ! PRODUK JUMBOTRON
// ! tahapan pembuatan
// ! masukan element ke row

let i = 0;
document.querySelector(".produk-br-1").innerHTML = market1
  .map((gambar) => {
    let { image, description, price, promo } = gambar;
    return `<div class="col-sm produkss">
  <div class="card">
    <div class="card-produkss text-center">
        <img src="${image}" alt="" class="produksss">
        <p class="p text-capitalize">${description}</p>
        <p>Rp.${price}</p>
        <button class="btn btn-primary" onclick=addtocart(${i++})>add to cart</button>
      <div class="promo"><p>${promo}</p></div>
    </div>
  </div>
</div>`;
  })
  .join("");

let cart = [];

function addtocart(a) {
  cart.push(market1[a]);
  displayCart();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart() {
  let j = 0;
  total = 0;
  document.querySelector("#shopping-cart .jumlah").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your Cart Is Empty";
    document.querySelector(
      "#shopping-cart .slide-shop .container-krj .foot #total"
    ).innerHTML = `Rp.${0}`;
  } else {
    // ! PHP ORDER
    document.querySelector(".form-container .cart").value =
      JSON.stringify(cart);

    document.getElementById("cartItem").innerHTML = cart
      .map((e) => {
        let { image, price, promo } = e;
        //! jumlah total harga
        total += price;

        // ! PHP ORDER
        document.querySelector(".form-container .total").value = total;

        document.querySelector(
          "#shopping-cart .slide-shop .container-krj .foot #total"
        ).innerHTML = `Rp.${total}`;
        return `<div class="cart-item">
          <div div class="row-img">
            <img src="${image}" alt="" class="rowing">
          </div>
        <p style="font-size: 18px;">${promo}</p>
        <h2 style="font-size: 1em;">Rp.${price}</h2>
        <div class=delete onclick='delElement(${j++})'>hapus</div>
      </div>`;
      })
      .join("");
  }
}

// ! Form Validation
const checkoutBtn = document.querySelector(".checkoutButton");
// ! disabled
checkoutBtn.disabled = true;

let checkoutForm = document.querySelector("#checkoutForm");
checkoutForm.addEventListener("keyup", function () {
  // ! cek element input value nya kosong atau gak
  // ! elements hanya untuk tag Form
  for (let i = 0; i < checkoutForm.elements.length; i++) {
    // ! ambil jumlah value pada elements tersebut;
    if (checkoutForm.elements[i].value.length !== 0) {
      checkoutBtn.classList.remove("disable");
      checkoutBtn.classList.add("disable");
    } else {
      return false;
    }
  }
  // ! jika input terisi semua jalankan =>
  checkoutBtn.disabled = false;
  checkoutBtn.classList.remove("disable");
});

// ! kirim data

checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // ! CARA AMBIL VALUE DARI FORM DAN MENJADI SEBUAH DATA ARRAY =>

  const formData = new FormData(checkoutForm);
  const data = new URLSearchParams(formData);
  // ! data menjadi object =>
  const objData = Object.fromEntries(data);
  // console.log(objData);
  const message = formatMessage(objData);
  // window.open("http://wa.me/6285659519463/?text=" + message);
});

// ! FORMAT PESAN WHATSAPP
// ! JSON PARSE OBJ.ITEMS STRING JADI OBJECT
const formatMessage = (obj) => {
  // ! STRING "OBJDATA.ITEMS" PARSING MENJADI ARRAY
  let a = JSON.parse(obj.items);
  console.log(obj);
  return `Data Customer :
  Nama: ${obj.name}
  Email: ${obj.email}
  No Hp: ${obj.phone}
  Data Pesanan :
  jumlah pesanan : ${a.length}
  TOTAL: ${obj.total}
  TERIMA KASIH`;
};

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

// ! LIGHTBOX

let containerLightBox1 = document.querySelector(".jumbotron-produk");
let containerLb = document.querySelector(".container-lightBox");
let containerLightBox2 = document.querySelector(
  ".container-lightBox .gambar-1 .contain img"
);

containerLightBox1.addEventListener("click", function (e) {
  if (e.target.className === "produksss") {
    containerLightBox2.src = e.target.src;
    containerLb.style.display = "block";
  }
});

containerLb.addEventListener("click", function (e) {
  if (e.target.className === "close")
    return (containerLb.style.display = "none");
  return (containerLb.style.display = "block");
});
