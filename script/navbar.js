const hamburger = document.getElementsByClassName("hamburger")[0]
const menu_mobile = document.getElementsByClassName("mobile-nav")[0]
const desktop_nav = document.getElementsByClassName("desktop-nav")[0]
const opacity = document.getElementsByClassName("opacity")[0]

const bottom_btn = document.getElementsByClassName("bottom-btn")[0]
const bottom_indicators = document.getElementsByClassName("carousel-indicators")


// Navbar animation
hamburger.addEventListener("click", function(){
  this.classList.toggle("show")
  desktop_nav.classList.toggle("border-animation")
  menu_mobile.classList.toggle("show-mobile")
  opacity.classList.toggle("show-opacity")
});



// Hide/show when scrolling up/down navbar/bottom btn
let lastSctollY = window.scrollY;

window.addEventListener("scroll", () => {

  if (lastSctollY < window.scrollY && !(menu_mobile.classList.contains("show-mobile"))){
    desktop_nav.classList.add("navbar-hide")
    if (bottom_btn){
      bottom_btn.classList.remove("bottom-btn-hide")
      for (var i = 0; i < bottom_indicators.length; i++) {
        bottom_indicators[i].classList.remove("bottom-indicators-hide")
      }
    }
  }else{
    desktop_nav.classList.remove("navbar-hide")
    if(bottom_btn){
      bottom_btn.classList.add("bottom-btn-hide")
      for (var i = 0; i < bottom_indicators.length; i++) {
        bottom_indicators[i].classList.add("bottom-indicators-hide")
      }
    }
  }
  lastSctollY = window.scrollY
});