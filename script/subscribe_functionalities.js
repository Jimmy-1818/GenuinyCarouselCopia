const generate_btn = document.getElementById("generate_qr_btn")
const qr_image = document.getElementById("qr_image")


generate_btn.addEventListener("click",()=>{
    let qr_link = document.getElementById("link").href
    let link_desktop = document.getElementById("link_desktop")
    if(!qr_link) return;
    qr_image.src = "images/play-w.png"
    qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qr_link}&size=[780]x[780]`;
    // The API might have problems once over 10,000 requests a day (--> warn the API or change method)
    link_desktop.href = qr_link
    link_desktop.innerHTML = qr_link
   
});