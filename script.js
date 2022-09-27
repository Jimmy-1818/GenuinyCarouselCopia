// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();


///////////PER CONDIVISIONE////////////

// SU CARICAMENTO
// pick up the current url > variable part
const link = window.location.href

// change registration link when receiving a personalized url
if (link.length > 67){
  console.log(link)
  const sublink = link.slice(57)
  console.log(sublink)



function change_link(){
  console.log("change_link")
  var affiliate_registration = "https://business.genuiny.com/" + sublink
  var current_link = document.getElementById('link')
  current_link.setAttribute('href', affiliate_registration)};
};

window.onload = change_link




// produzione link
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




  // prova button classi ecc

button = document.getElementById("button")
quadrato_prova = document.getElementById("square")

if(button){button.addEventListener("click", button_click)};

function button_click(){
  quadrato_prova.classList.add("resize")
  alert("AAAA");
}




window.addEventListener("scroll", function(event){
  var scroll = this.scrollY;
  var title = document.getElementById("carouselExampleIndicators-4")
  if(title){
  console.log(window.pageYOffset - title.getBoundingClientRect().top + 140);
  }
});