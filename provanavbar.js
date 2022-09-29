const hamburger = document.getElementsByClassName("hamburger")[0]
const menu_mobile = document.getElementsByClassName("mobile-nav")[0]
const desktop_nav = document.getElementsByClassName("desktop-nav")[0]

hamburger.addEventListener("click", function(){
  this.classList.toggle("is-active")
  desktop_nav.classList.toggle("border-animation")
  menu_mobile.classList.toggle("is-active-mobile")
});