
function onFullScreen() {
  console.log(this.classList)
  this.classList.toggle("border-none")
}

document.getElementsByClassName("milena-spiega")[0].addEventListener('webkitfullscreenchange', onFullScreen)
document.getElementsByClassName("milena-spiega")[0].addEventListener('mozfullscreenchange', onFullScreen)
document.getElementsByClassName("milena-spiega")[0].addEventListener('fullscreenchange', onFullScreen)
document.getElementsByClassName("milena-spiega")[0].addEventListener('msfullscreenchange', onFullScreen)
