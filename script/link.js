// ON LOADING (FIRST from index.html)
var userLang = navigator.language || navigator.userLanguage; 

// Set affiliate link
if (window.location.href.includes("#")){
  localStorage.setItem("hash", window.location.hash.slice(1))
}


// If a personalized link is relevated and we're in subscribe CHANGE LINK
if (!(localStorage.getItem("hash") == null) && !(document.getElementById("link") == null)){
  var affiliate_registration = "https://business.genuiny.com/register/index?referralCode=" + localStorage.getItem("hash") 
  var subscribe_button = document.getElementById('link')
  subscribe_button.setAttribute('href', affiliate_registration)
}

