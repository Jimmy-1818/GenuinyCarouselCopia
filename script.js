


sessionStorage.setItem("URL", window.location)
var data = sessionStorage.getItem("URL")
setTimeout(change_link, 3000)


/////////// FOR SHARING ////////////

// ON LOADING
// pick up the current url > variable part
const link = window.location.href

// change registration link when receiving a personalized url
                  // windows.location.url.length + 10
if (link.length > 80){
  console.log(link)

                          // windows.location.url.length + 4 = e.s. 62 + 4 = 66
  const sublink = link.slice(66)
  console.log(sublink)

function change_link(){
  console.log("change_link")
  var affiliate_registration = "https://business.genuiny.com/" + sublink
  var current_link = document.getElementById('link')
  current_link.setAttribute('href', affiliate_registration)};
  console.log(data)
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
    alert('Incolla il link che ottieni nell\'app da "condividi app".')
  }
};