const hamburger = document.getElementsByClassName("hamburger")[0]
const menu_mobile = document.getElementsByClassName("mobile-nav")[0]
const desktop_nav = document.getElementsByClassName("desktop-nav")[0]
const opacity = document.getElementsByClassName("opacity")[0]

const bottom_btn = document.getElementsByClassName("bottom-btn")[0]
const control_prev = document.getElementsByClassName("carousel-control-prev")
const control_next = document.getElementsByClassName("carousel-control-next")
const module_overflow = document.getElementsByClassName("module-overflow")


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
    var titles_distances = []
    var bottom_btn = document.getElementsByClassName("bottom-btn")[0]
    for (var i = 0; i < carousel.length; i++) {
      var current_distance = carousel[i].getBoundingClientRect().top - margin_top
      titles_distances.push(Math.abs(Math.round(current_distance)));
    }
    var nearest_distance = (Math.min.apply(Math, titles_distances))

// Hide/show when scrolling up/down navbar/bottom btn
  if (lastSctollY < window.scrollY && !(menu_mobile.classList.contains("show-mobile"))){
    desktop_nav.classList.add("navbar-hide")
  }else if (nearest_distance > 70){
    desktop_nav.classList.remove("navbar-hide")
  }
  lastSctollY = window.scrollY


// When near a title bring up BOOTTOM BTN & not displayed INDICATORS & not displayed CONTROLS & controll SCROLL unlock
    if (nearest_distance < 70){
      bottom_btn.classList.add("bottom-btn-up")
      for (var i = 0; i < indicators.length; i++) {
        module_overflow[i].classList.remove("overflow-hidden")
        indicators[i].classList.remove("bottom-indicators-down")
        control_prev[i].classList.remove("bottom-control-down")
        control_next[i].classList.remove("bottom-control-down")
      }
    }
    else{
      bottom_btn.classList.remove("bottom-btn-up")
      for (var i = 0; i < indicators.length; i++) {
        module_overflow[i].classList.add("overflow-hidden")
        indicators[i].classList.add("bottom-indicators-down")
        control_next[i].classList.add("bottom-control-down")
        control_prev[i].classList.add("bottom-control-down")
      }
    }

// Show just the nearest INDICATOR GROUP & CONTROLS 
    let current_i = titles_distances.indexOf(nearest_distance)
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



// var titles = $(".carousel-inner > .carousel-item > .module > h1")
// make titles_text --> list of lists; titles_text [ ["title1", "title2"] ["title1", "title2", "title3"] ]

var titles_text = []
const titles = $(".carousel-inner > .carousel-item > .module > h1").text()

for (var i = 0; i < document.getElementsByClassName("carousel-inner").length ;i++) {
  for (var i2 = 0; i2 < document.getElementsByClassName("carousel-inner")[i].getElementsByClassName("carousel-item").length; i2++) {
    console.log(i,i2)
    //console.log(document.querySelector('.carousel-inner:nth-child(1)')):
    //var content = document.getElementsByClassName("carousel-inner")[i].getElementsByClassName("carousel-item")[i2].getElementsByClassName("module-title")
    //console.log(content)
  }
}

