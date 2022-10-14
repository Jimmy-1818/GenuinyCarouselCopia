// ON LOADING (FIRST from index.html)

// Set session link
if (sessionStorage.getItem("URL") == null){
  sessionStorage.setItem("URL", window.location.href)
}



// If a personalized link is relevated
if(sessionStorage.getItem("URL").includes("#")){
  
  var index = sessionStorage.getItem("URL").indexOf("#")
  var varibale_affiliation = sessionStorage.getItem("URL").slice(index + 1)
  var affiliate_registration = "https://business.genuiny.com/" + varibale_affiliation    

  // Keep #variable in pages's url (to pass it even if session is broken and url hash lost)
  const page_links = document.getElementsByClassName("page-link")
  for (var i = 0; i < page_links.length; i++) {
    var new_link = page_links[i].href + "#" + varibale_affiliation
    page_links[i].setAttribute("href", new_link)
  }
  
  // In subscribe
  if (document.getElementById("link")){
    var subscribe_button = document.getElementById('link')
    subscribe_button.setAttribute('href', affiliate_registration)
  }
}




// LINK PRODUCTION *AGGIUNGI LA CORREZIONI PER CHI INSERISCE IL LINK CON IL MESSAGGIO
if (document.getElementById("process-link")){
  document.getElementById("process-link").addEventListener("click", generate_link)
  document.getElementById("link-to-process").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    generate_link()
  }
  })
};


function generate_link(){
  var affiliation_link = String(document.getElementById("link-to-process").value)
  if(affiliation_link.includes("https://business.genuiny.com/")){
    var link_index = affiliation_link.indexOf("https://business.genuiny.com/")
    var variable_affiliation = affiliation_link.slice(link_index + 29)
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
