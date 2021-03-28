var menu_icon = document.querySelector(".menu-icon");
var navs = document.querySelector(".navs");
var icon = document.getElementById("icon");
menu_icon.addEventListener("click", () => {
  if (navs.style.display === "none") {
    navs.style.display = "flex";
    icon.className = "fas fa-times";
  } else {
    navs.style.display = "none";
    icon.className = "fas fa-bars";
  }
});

window.onscroll = function () {
  myFunction();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
