const input = document.getElementById("processed-link")
const copy_btn = document.getElementById("copy-link")

copy_btn.onclick = function(){
  if (input.value !== null){

  }
  // Select text
  input.select();
  // Copy the text
  document.execCommand("Copy");
};