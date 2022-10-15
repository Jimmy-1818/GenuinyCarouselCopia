// ON LOADING (FIRST from index.html)

// Set affiliate link
if (window.location.href.includes("#")){
  localStorage.setItem("href", window.location.href)
}


// If a personalized link is relevated and we're in subscribe CHANGE LINK
if (!(localStorage.getItem("href") == null) && !(document.getElementById("link") == null)){
  var index = localStorage.getItem("href").indexOf("#")
  var varibale_affiliation = localStorage.getItem("href").slice(index + 1)
  var affiliate_registration = "https://business.genuiny.com/register/index?referralCode=" + varibale_affiliation    
  var subscribe_button = document.getElementById('link')
  subscribe_button.setAttribute('href', affiliate_registration)
}




// LINK PRODUCTION
if (document.getElementById("process-link")){
  document.getElementById("process-link").addEventListener("click", generate_link)
  document.getElementById("link-to-process").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      generate_link()
    }
  });
}

function generate_link(){
  var affiliation_link = String(document.getElementById("link-to-process").value)
  if(affiliation_link.includes("https://business.genuiny.com/")){
    var link_index = affiliation_link.indexOf("https://business.genuiny.com/")
    var variable_affiliation = affiliation_link.slice(link_index + 57)
    var affiliate_site = "https://jimmy-1818.github.io/GenuinyCarouselCopia/index.html" + "#" + variable_affiliation
    document.getElementById("processed-link").value = affiliate_site
  }
  else if (affiliation_link.length > 0){
    alert('Link non valido. Incolla il referral link, che ottieni nell\'app da "condividi app".')
  }
  else {
    alert('Incolla prima il referral link, che ottieni nell\'app da "condividi app".')
  }
};