const hamburger = document.getElementsByClassName("hamburger")[0]
const menu_mobile = document.getElementsByClassName("mobile-nav")[0]
const desktop_nav = document.getElementsByClassName("desktop-nav")[0]
const opacity = document.getElementsByClassName("opacity")[0]

hamburger.addEventListener("click", function(){
  this.classList.toggle("show")
  desktop_nav.classList.toggle("border-animation")
  menu_mobile.classList.toggle("show-mobile")
  opacity.classList.toggle("show-opacity")
});



// Hide when scrolling up
let lastSctollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastSctollY < window.scrollY && !(menu_mobile.classList.contains("show-mobile"))){
    desktop_nav.classList.add("navbar-hide")
  }else{
    desktop_nav.classList.remove("navbar-hide")
    console.log(desktop_nav)
  }
  lastSctollY = window.scrollY
});