const hamburger = document.getElementsByClassName("hamburger")[0]
const menu_mobile = document.getElementsByClassName("mobile-nav")[0]
const desktop_nav = document.getElementsByClassName("desktop-nav")[0]
const opacity = document.getElementsByClassName("opacity")[0]

hamburger.addEventListener("click", function(){
  this.classList.toggle("is-active")
  menu_mobile.classList.toggle("is-active-mobile")
  opacity.classList.toggle("is-active-opacity")
});