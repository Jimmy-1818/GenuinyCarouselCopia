const hamburger = document.getElementsByClassName("hamburger")[0]
const menu_mobile = document.getElementsByClassName("mobile-nav")[0]
const desktop_nav = document.getElementsByClassName("desktop-nav")[0]
const opacity = document.getElementsByClassName("opacity")[0]

const bottom_btn = document.getElementsByClassName("bottom-btn")[0]
const control_prev = document.getElementsByClassName("carousel-control-prev")
const control_next = document.getElementsByClassName("carousel-control-next")
const module_overflow = document.getElementsByClassName("module-overflow")
var carousel = document.getElementsByClassName("carousel")

// Navbar animation
hamburger.addEventListener("click", function(){
  this.classList.toggle("show")
  desktop_nav.classList.toggle("border-animation")
  menu_mobile.classList.toggle("show-mobile")
  opacity.classList.toggle("show-opacity")
});

// Get a list of lists of titles
var titles_text = []
for (var i = 0; i < document.getElementsByClassName("carousel-inner").length ;i++) {
  var current_titles = []
  for (var i2 = 0; i2 < document.getElementsByClassName("carousel-inner")[i].getElementsByClassName("carousel-item").length; i2++) {
    var current_title = document.getElementsByClassName("carousel-inner")[i].getElementsByClassName("carousel-item")[i2].querySelector("h1").innerHTML
    current_titles.push(current_title)
  };
  titles_text.push(current_titles)
};
      // console.log(titles_text)



// A function that returns the current carousel index and its distance
function current_index(){
  //margin between title and top page
  const margin_top = 50

  var titles_distances = []
  for (var i = 0; i < carousel.length; i++) {
    var current_distance = carousel[i].getBoundingClientRect().top - margin_top
    titles_distances.push(Math.abs(Math.round(current_distance)));
  }
  var nearest_distance = (Math.min.apply(Math, titles_distances))
  var current_index = titles_distances.indexOf(nearest_distance)
  var values_return = [current_index, nearest_distance]  
  return values_return
};


/////////////// TO SHOW/HIDE BOTTOM BTN/NAVBAR //////////////

let lastSctollY = window.scrollY;
if(carousel){window.addEventListener("scroll", on_scroll)};

// Button prev/next
const carousel_control = document.getElementsByClassName("carousel-control")
for (var i = 0; i < carousel_control.length; i++) {
  carousel_control[i].addEventListener("click", function(){
    setTimeout(control_title, 650)
  });
};


function on_scroll(){
  control_title()
  var indicators = document.getElementsByClassName("carousel-indicators")

  // Track position of nearest title in relation to top view
  var current_i = current_index()[0]
  var nearest_distance = current_index()[1]
  var bottom_btn = document.getElementsByClassName("bottom-btn")[0]

  // Hide/show when scrolling up/down navbar/bottom btn
  if (lastSctollY < window.scrollY && !(menu_mobile.classList.contains("show-mobile"))){
    desktop_nav.classList.add("navbar-hide")
  }else if (nearest_distance > 70){
    desktop_nav.classList.remove("navbar-hide")
  }
  lastSctollY = window.scrollY


  // When near a title bring up BOOTTOM BTN & not displayed INDICATORS 
  //& not displayed CONTROLS & controll SCROLL unlock
  if (nearest_distance < 70){
    bottom_btn.classList.add("bottom-btn-up")
    for (var i = 0; i < indicators.length; i++) {
      module_overflow[i].classList.remove("overflow-hidden")
      indicators[i].classList.add("bottom-indicators-up")
      control_prev[i].classList.remove("bottom-control-down")
      control_next[i].classList.remove("bottom-control-down")
    }
  }
  else{
    bottom_btn.classList.remove("bottom-btn-up")
    for (var i = 0; i < indicators.length; i++) {
      module_overflow[i].classList.add("overflow-hidden")
      indicators[i].classList.remove("bottom-indicators-up")
      control_next[i].classList.add("bottom-control-down")
      control_prev[i].classList.add("bottom-control-down")
    }
  }

  // Show just the nearest INDICATOR GROUP & CONTROLS 
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
};

function control_title(){
  var module_title_bottom = document.getElementsByClassName("module-title-bottom")[0]
  var current_i = current_index()[0]
  var items = document.getElementsByClassName("carousel-inner")[current_i]..querySelector(".carousel-item")
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("active")){
      var current_item_index = i
    }
  }

  var current_h1 = titles_text[current_i][current_item_index]
  if (titles_text[current_i][titles_text[current_i].indexOf(current_h1) + 1]){
    var next_h1 = titles_text[current_i][titles_text[current_i].indexOf(current_h1) + 1]
  }
  else if (!(current_i == document.getElementsByClassName("carousel-inner").length - 1 && current_item_index == items.length - 1)){
    var next_h1 = titles_text[current_i + 1][0]
  }
  else{
    var next_h1 = "Iscriviti" 
  }

  module_title_bottom.innerHTML = next_h1
};
