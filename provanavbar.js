var button = document.getElementsByClassName("button")[0]
console.log("piegnion")

if(button){button.addEventListener("click", hamburger)}
var t = true
function hamburger(){
  var navbar = document.getElementById("navbar")
  var nav_links = document.getElementById("nav-links")
  if (t){
    navbar.style.height="25px"
    nav_links.style.visibility="hidden"
    t = false
  }
  else{
    navbar.style.height="60px"
    nav_links.style.visibility="visible"
    t = true
  }
}

$(document).ready(function(){
  $("button").click(function(){
    $("#nav-links").fadeToggle("slow");
  });
});


