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