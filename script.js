

/////////// FOR SHARING ////////////

// ON LOADING
// pick up the current url > variable part
const link = window.location.href

// change registration link when receiving a personalized url
if (link.length > 80){
  console.log(link)
  const sublink = link.slice(66)
  console.log(sublink)

function change_link(){
  console.log("change_link")
  var affiliate_registration = "https://business.genuiny.com/" + sublink
  var current_link = document.getElementById('link')
  current_link.setAttribute('href', affiliate_registration)};
};
window.onload = change_link



// link production *AGGIUNGI LA CORREZIONI PER CHI INSERISCE IL LINK CON IL MESSAGGIO
button = document.getElementById("process-link")
if (button){button.addEventListener("click", process_link)};

function process_link(){
  var affiliation_link = document.getElementById("link-to-process").value
  if(affiliation_link.length > 10){
    var variable_affiliation = String(affiliation_link).slice(29)
    var affiliate_site = "https://jimmy-1818.github.io/GenuinyCarouselCopia/index.html" + "#/" + variable_affiliation

    document.getElementById("processed-link").value = affiliate_site
  }
  else{
    alert("inserire il link come da passo 1")
  }
};



/////////////// PER "PASSARE" SCROLL//////////////

// Track position of nearest title in relation to top view
window.addEventListener("scroll", function(event){
  var carousel = document.getElementsByClassName("carousel")
  var indicators = document.getElementsByClassName("carousel-indicators")
  //margin between title and top page
  const margin_top = 50

  if(carousel){
    var titles = []
    var bottom_btn = document.getElementsByClassName("bottom-btn")[0]
    for (var i = 0; i < carousel.length; i++) {
      var current_distance = carousel[i].getBoundingClientRect().top - margin_top
      titles.push(Math.abs(Math.round(current_distance)));
    }
    var nearest_distance = (Math.min.apply(Math, titles))
    console.log(nearest_distance)
    
    for (var i = 0; i < indicators.length; i++) {
      if (nearest_distance < 100){
        bottom_btn.classList.remove("bottom-btn-hide-title")
        indicators[i].classList.remove("bottom-indicators-hide-title")
      }
      else{
        bottom_btn.classList.add("bottom-btn-hide-title")
        indicators[i].classList.add("bottom-indicators-hide-title")  
      }
    }
    // Show just the nearest indicator
    var current_i = titles.indexOf(nearest_distance)
    for (var i = 0; i < indicators.length; i++) {
      if (i == current_i){
        indicators[i].classList.add("display-block")
      }
      else{
        indicators[i].classList.remove("display-block")
      }
    }
  }
});