

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
  var scroll = this.scrollY;
  var carousel = document.getElementsByClassName("carousel")
  var current_carousel = ""

  //margin between title and top page
  const margin_top = 30

  if(carousel){
    var titles = []
    for (var i = 0; i < carousel.length; i++) {
      var current_distance = carousel[i].getBoundingClientRect().top - margin_top
      titles.push(Math.abs(Math.round(current_distance)));
    }
    console.log(Math.min.apply(Math, titles))
  }
});
