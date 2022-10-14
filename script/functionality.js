if (document.getElementById("copy-link")){
  document.getElementById("copy-link").addEventListener("click", copy_link)
}
//function copy_link(){
//  navigator.clipboard.writeText(document.getElementById("processed-link").value)
//  alert("Copiato negli appunti")
//};


<button id="btn1" data-clipboard-text="Text to copy goes here">
    Copy to clipboard
</button>
<button id="btn2">Click here to change data-clipboard-text</button>

<br /><br />

<input type="text" placeholder="Paste here to see clipboard" />

new ClipboardJS("#btn1");
document.querySelector("#copy-link").addEventListener("click", () => 
  document.querySelector("#processed-link").dataset.clipboardText = Math.random());


function leave_video(){
  alert("video leaved")
}