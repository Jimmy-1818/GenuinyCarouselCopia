const generate_btn = document.getElementById("generate_qr_btn")
const qr_image = document.getElementById("qr_image")


generate_btn.addEventListener("click",()=>{
    let qr_destination = document.getElementById("link").href
    let link_desktop = document.getElementById("link_desktop")
    if(!qr_destination){return};
    var qr_link = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qr_destination}&size=[780]x[780]`;
    if (qr_image.src != qr_link){
        qr_image.src = qr_link
    } 
    // The API might have problems once over 10,000 requests a day (--> warn the API or change method)
    link_desktop.href = qr_destination
    link_desktop.innerHTML = qr_destination
   
});