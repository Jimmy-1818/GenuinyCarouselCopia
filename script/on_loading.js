// ON LOADING (FIRST from index.html)

// languages on html: [ita, spa, eng], languages in navigator.language: [it, es, en]
// default lang is english

function set_lang_manually(language){
  localStorage.setItem("lang_set", language)
  language_set()
  if(window.location.pathname.includes("affiliation")){
    on_input()
  }
}

language_set()
function language_set(){
  lang_setted = false
  if (!lang_setted && localStorage.getItem("lang_set") == null){
    var browser_languages = navigator.languages || navigator.userLanguages;
    for (var i = 0; i < browser_languages.length; i++) {
      var browser_language = browser_languages[i]
      if (!lang_setted){
        if(browser_language.includes("en")){
          null //every elem with (lang!="eng" is "display_none" to start with)
          lang_setted = true
          set_translated_media("eng")  
        }
        else if(browser_language.includes("it")){
          hide_other_languages("ita")
          set_translated_media("non-eng")
          console.log("ittS")
          lang_setted = true
        }else if(browser_language.includes("sl")){
          hide_other_languages("slv")
          set_translated_media("non-eng")
          lang_setted = true
        }else if(browser_language.includes("es")){
          hide_other_languages("spa")
          set_translated_media("non-eng")
          lang_setted = true
        }
      }
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


//change content based on language (ita / eng)
function set_translated_media(language){
  console.log("oin")
  if (language == "eng"){
    console.log("eng media")
  }else{
    console.log("eng ita")
  }
}


// Set affiliate link and cancel it from url
if (window.location.href.includes("#")){
  localStorage.setItem("hash", window.location.hash.slice(1))
  var url =  window.location.href.substr(0, window.location.href.indexOf("#"))
  history.replaceState(null, "", url)
}
