// ON LOADING (FIRST from index.html)

// Set affiliate link and cancel it from url
if (window.location.href.includes("#")){
  localStorage.setItem("hash", window.location.hash.slice(1))
  var url =  window.location.href.substr(0, window.location.href.indexOf("#"))
  history.replaceState(null, "", url)
}

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
          null //every elem with (lang!="eng" is "display_none" by default)
          lang_setted = true
          set_translated_media("eng")
        }
        else if(browser_language.includes("it")){
          hide_other_languages("ita")
          lang_setted = true
        }else if(browser_language.includes("sl")){
          hide_other_languages("slv")
          lang_setted = true
        }else if(browser_language.includes("es")){
          hide_other_languages("spa")
          lang_setted = true
        }
      }
    }
  }else{
    hide_other_languages(localStorage.getItem("lang_set"))
  }
}


function hide_other_languages(language){

  if (language != "ita"){
    set_translated_media("eng")
  }
  else{
    set_translated_media("ita")
  }

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


  if(window.location.pathname.includes("index")){
    var smartphone = document.getElementsByClassName("smartphone")
    var alerts_btn = document.getElementsByClassName("alerts_btn")[0]
    var balance_image = document.getElementsByClassName("balance_image")[0]
    if (language == "eng"){
      if (smartphone[0].getAttribute("src") != "images/front-mock-up-eng.png"){
        alerts_btn.setAttribute("src", "images/alerts_eng.png")
        balance_image.setAttribute("src", "images/account_eng.png")
        for (var i = 0; i < smartphone.length; i++) {
          smartphone[i].setAttribute("src", "images/front-mock-up-eng.png")
        }
      }
    }else if (language == "ita"){
      alerts_btn.setAttribute("src", "images/alerts_ita.png")
      balance_image.setAttribute("src", "images/account_ita.png")
      for (var i = 0; i < smartphone.length; i++) {
        smartphone[i].setAttribute("src", "images/front-mock-up-ita.png")
      }
    }
  }


  else if (window.location.pathname.includes("subscribe")){
    var video_autenticate = document.getElementsByClassName("video_autenticate_src")[0]
    if (language == "eng"){
      if (video_autenticate.getAttribute("src") != "/videos/autenticate_base_eng.mp4"){
        video_autenticate.setAttribute("src", "/videos/autenticate_base_eng.mp4")
        document.getElementById('video-tutorial-subscribe').load()
      }
    }else if (language == "ita"){
      video_autenticate.setAttribute("src", "/videos/autenticate_base_ita.mp4")  
      document.getElementById('video-tutorial-subscribe').load()
    }


  }else if (window.location.pathname.includes("share")){
    var source_share_app = document.getElementById("source_share_from_app")
    var source_share_site = document.getElementById("source_share_via_site")
    var source_share_ig = document.getElementById("source_share_on_instagram")
    if (language == "eng"){
      if (source_share_app.getAttribute("src") != "/videos/share_from_app_eng.mp4"){
        source_share_app.setAttribute("src", "/videos/share_from_app_eng.mp4")
        source_share_site.setAttribute("src", "/videos/share_from_app_eng.mp4")
        source_share_ig.setAttribute("src", "/videos/share_from_app_eng.mp4")
        document.getElementById('video-share-from-app').load()
        document.getElementById('video-share-via-site').load()
        document.getElementById('video-share-on-instagram').load()
      }
    }else if (language == "ita"){
      console.log("___")
      source_share_app.setAttribute("src", "/videos/share_from_apppp_ita.mp4")
      source_share_site.setAttribute("src", "/videos/share_from_apppp_ita.mp4")
      source_share_ig.setAttribute("src", "/videos/share_from_apppp_ita.mp4")
      document.getElementById('video-share-from-app').load()
      document.getElementById('video-share-via-site').load()
      document.getElementById('video-share-on-instagram').load()
    }
  }
}

