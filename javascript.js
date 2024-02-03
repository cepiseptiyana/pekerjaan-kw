// ANIMASI PADA "LOGO" NAVBAR
let logo = document.querySelector(".logo");
let animasiLogoNavbar = [...logo.textContent]
  .map((el) => `<span>${el}</span>`)
  .join("");
logo.innerHTML = animasiLogoNavbar;

// ANIMASI JUMBOTRON KANAN
// IMAGE GALERY
let leftFoto = document.getElementsByClassName("leftt")[0];
let switchFoto = document.querySelector(".kanan-tengah .container");
switchFoto.addEventListener("click", function (event) {
  if (event.target.className == "image") {
    leftFoto.src = event.target.src;
    leftFoto.classList.add("fade");
    setTimeout(function () {
      leftFoto.classList.remove("fade");
    }, 2000);
  }
});

// ANIMASI TAG "P" PADA NAVBAR
let drop = document.querySelector(".kontak .box");
let i = document.querySelector(".kontak p");
i.addEventListener("click", function () {
  drop.classList.toggle("toggle");
});
