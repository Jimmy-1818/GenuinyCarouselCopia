const generate_btn = document.getElementById("generate_qr_btn")
const qr_image = document.getElementById("qr_image")

generate_btn.addEventListener("click",()=>{
    let qr_link = document.getElementById("link").href
    let link_desktop = document.getElementById("link_desktop")
    if(!qr_link) return;
    qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qr_link}&size=[780]x[780]`;
    link_desktop.href = qr_link
    link_desktop.innerHTML = qr_link
   
});