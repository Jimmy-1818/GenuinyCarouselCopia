
// ON LOADING (FIRST from index.html)

// Set session link
if (sessionStorage.getItem("URL") == null){
  sessionStorage.setItem("URL", window.location.href)
  console.log("URL copied!")
}

// If in subscribe.html
if (document.getElementsByClassName("subscribe-steps").length > 0){
  console.log("in subscribe")
  if(sessionStorage.getItem("URL").includes("#")){
    console.log("# found")
    var index = sessionStorage.getItem("URL").indexOf("#")
    var sublink = sessionStorage.getItem("URL").slice(index + 1)
    var affiliate_registration = "https://business.genuiny.com/" + sublink
    if (document.getElementById("link")){
      var subscribe_button = document.getElementById('link')
      subscribe_button.setAttribute('href', affiliate_registration)
    }
  }
}




// LINK PRODUCTION *AGGIUNGI LA CORREZIONI PER CHI INSERISCE IL LINK CON IL MESSAGGIO
button = document.getElementById("process-link")
if (button){button.addEventListener("click", generate_link)
  var link_input = document.getElementById("link-to-process")
  //link_input.addEventListener("")
};

function generate_link(){
  var affiliation_link = document.getElementById("link-to-process").value
  if(affiliation_link.length > 10){
    var variable_affiliation = String(affiliation_link).slice(29)
    var affiliate_site = "https://jimmy-1818.github.io/GenuinyCarouselCopia/index.html" + "#/" + variable_affiliation

    document.getElementById("processed-link").value = affiliate_site
  }
  else{
    alert('Incolla prima il referral link, che ottieni nell\'app da "condividi app".')
  }
};
