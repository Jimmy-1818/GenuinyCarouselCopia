function generate_qr(){
	console.log("oj")
}

const generate_btn = document.getElementById("generate_qr_btn")
const qr_image = document.getElementById("qr_image")


/* This block of code executes when the user clicks on the generate button after entering a value(i.e a valid url or even a text) */
generate_btn.addEventListener("click",()=>{
    let qr_link = document.getElementById("link").href
    if(!qr_link) return;
    qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qr_link}`;
   
});