// ON LOADING (FIRST from index.html)

// languages on html: [ita, spa, eng], languages in navigator.language: [it, es, en]
// default lang is english, if checked 

function set_lang_manually(language){
  localStorage.setItem("lang_set", language)
  language_set()
}

language_set()
function language_set(){  
  lang_set = false
  if (!lang_set && localStorage.getItem("lang_set") == null){
    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang)
    if(userLang.includes("en")){
      null
    }
    else if(userLang.includes("it")){
      hide_other_languages("ita")
      lang_set = true
    }else if(userLang.includes("sl")){
      hide_other_languages("slv")
      lang_set = true
    }else if(userLang.includes("es")){
      hide_other_languages("spa")
      lang_set = true
    }
  }else{
    hide_other_languages(localStorage.getItem("lang_set"))
  }
}


function hide_other_languages(language){
  const lang_elements = document.querySelectorAll('[lang]');
  for (var i = 0; i < lang_elements.length; i++) {
    if (lang_elements[i].getAttribute("lang") != language){
      lang_elements[i].classList.add("display_none")
    }else{
      lang_elements[i].classList.remove("display_none")
    }
  }
}




// Set affiliate link
if (window.location.href.includes("#")){
  localStorage.setItem("hash", window.location.hash.slice(1))
  window.history.pushState("object or string", "Title", "/new-url")
}


// If a personalized link is relevated and we're in subscribe CHANGE LINK
if (!(localStorage.getItem("hash") == null) && !(document.getElementById("link") == null)){
  var affiliate_registration = "https://business.genuiny.com/register/index?referralCode=" + localStorage.getItem("hash") 
  var subscribe_button = document.getElementById('link')
  subscribe_button.setAttribute('href', affiliate_registration)
}

