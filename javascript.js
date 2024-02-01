// ANIMASI PADA "LOGO" NAVBAR
let logo = document.querySelector(".logo");
let animasiLogoNavbar = [...logo.textContent]
  .map((el) => `<span>${el}</span>`)
  .join("");
logo.innerHTML = animasiLogoNavbar;
// ANIMASI TAG "P" PADA NAVBAR
let drop = document.querySelector(".kontak .box");
let i = document.querySelector(".kontak p");
i.addEventListener("click", function () {
  drop.classList.toggle("toggle");
});
