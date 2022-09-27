const hamburger = document.getElementsByClassName('hamburger')[0]


hamburger.addEventListener("click", function(){
  console.log("in function")
  this.classList.toggle("is-active")
});