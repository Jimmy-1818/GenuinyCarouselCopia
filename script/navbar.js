const hamburger = document.getElementsByClassName("hamburger")[0]
const menu_mobile = document.getElementsByClassName("mobile-nav")[0]
const desktop_nav = document.getElementsByClassName("desktop-nav")[0]
const opacity = document.getElementsByClassName("opacity")[0]

const bottom_btn = document.getElementsByClassName("bottom-btn")[0]
const control_prev = document.getElementsByClassName("carousel-control-prev")
const control_next = document.getElementsByClassName("carousel-control-next")


// Navbar animation
hamburger.addEventListener("click", function(){
  this.classList.toggle("show")
  desktop_nav.classList.toggle("border-animation")
  menu_mobile.classList.toggle("show-mobile")
  opacity.classList.toggle("show-opacity")
});



/////////////// TO SHOW/HIDE BOTTOM BTN/NAVBAR //////////////

let lastSctollY = window.scrollY;

window.addEventListener("scroll", on_scroll)

function on_scroll(){
  var carousel = document.getElementsByClassName("carousel")
  var indicators = document.getElementsByClassName("carousel-indicators")
  //margin between title and top page
  const margin_top = 50

// Track position of nearest title in relation to top view
  if(carousel){
    var titles = []
    var bottom_btn = document.getElementsByClassName("bottom-btn")[0]
    for (var i = 0; i < carousel.length; i++) {
      var current_distance = carousel[i].getBoundingClientRect().top - margin_top
      titles.push(Math.abs(Math.round(current_distance)));
    }
    var nearest_distance = (Math.min.apply(Math, titles))

// Hide/show when scrolling up/down navbar/bottom btn
  if (lastSctollY < window.scrollY && !(menu_mobile.classList.contains("show-mobile"))){
    desktop_nav.classList.add("navbar-hide")
  }else if (nearest_distance > 70){
    desktop_nav.classList.remove("navbar-hide")
  }
  lastSctollY = window.scrollY


// When near a title bring up BOOTTOM BTN & not displayed INDICATORS & not displayed CONTROLS 
    if (nearest_distance < 70){
      bottom_btn.classList.add("bottom-btn-up")
      for (var i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("bottom-indicators-down")
        control_prev[i].classList.remove("bottom-control-down")
        control_next[i].classList.remove("bottom-control-down")
      }
    }
    else{
      bottom_btn.classList.remove("bottom-btn-up")
      for (var i = 0; i < indicators.length; i++) {
        indicators[i].classList.add("bottom-indicators-down")
        control_next[i].classList.add("bottom-control-down")
        control_prev[i].classList.add("bottom-control-down")
      }
    }

// Show just the nearest INDICATOR GROUP & CONTROLS 
    var current_i = titles.indexOf(nearest_distance)
    for (var i = 0; i < indicators.length; i++) {
      if (i == current_i){
        indicators[i].classList.add("display-block")
        control_next[i].classList.add("display-block")
        control_prev[i].classList.add("display-block")
      }
      else{
        indicators[i].classList.remove("display-block")
        control_next[i].classList.remove("display-block")
        control_prev[i].classList.remove("display-block")
      }
    }
  }
};
