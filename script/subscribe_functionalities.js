const generate_btn = document.getElementById("generate_qr_btn")
const qr_image = document.getElementById("qr_image")

// If a personalized link is relevated CHANGE LINK
if (localStorage.getItem("hash") != null){
  var affiliate_registration = "https://business.genuiny.com/register/index?referralCode=" + localStorage.getItem("hash") 
  var subscribe_button = document.getElementById('link')
  subscribe_button.setAttribute('href', affiliate_registration)
}

generate_btn.addEventListener("click",()=>{
    let qr_destination = document.getElementById("link").href
    let link_desktop = document.getElementById("link_desktop")
    if(!qr_destination){return};
    var qr_link = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qr_destination}&size=[780]x[780]`;
    //if (qr_destination == business.geniny.com/default registration){
    //    qr_image.src = "imaegs/default_qr.png" <-- da scaricare tramite l'api per omologazione}
    if (qr_image.src != qr_link){
        qr_image.src = qr_link
        qr_image.src = qr_link
    } 
    // The API might have problems once over 10,000 requests a day (--> warn the API or change method)
    link_desktop.href = qr_destination
    link_desktop.innerHTML = qr_destination
   
});