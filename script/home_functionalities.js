
function onFullScreen() {
  var isFullscreenNow = document.webkitFullscreenElement !== null
  if (isFullscreenNow){
    this.style.border = "none"
  }
  else if (!(isFullscreenNow))
    this.style.border = "5px solid #09435e"
}

document.getElementsByClassName("milena-spiega")[0].addEventListener('webkitfullscreenchange', onFullScreen)
document.getElementsByClassName("milena-spiega")[0].addEventListener('mozfullscreenchange', onFullScreen)
document.getElementsByClassName("milena-spiega")[0].addEventListener('fullscreenchange', onFullScreen)