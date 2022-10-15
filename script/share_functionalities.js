const input = document.getElementById("processed-link")
const copy_btn = document.getElementById("copy-link")

copy_btn.onclick = function(){
  if (input.value.length > 0){
    // Select text
    input.select();
    // Copy the text
    document.execCommand("Copy");
    alert("Link Copiato!")
  }
  else{
    alert("Impossibile copiare, inserisci prima il link.")
  }
};

var clipboard_text = window.clipboardData.getData('Text')
console.log(clipboard_text)