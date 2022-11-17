// If a personalized link is relevated CHANGE LINK
if (localStorage.getItem("hash") != null){
  var affiliate_registration = "https://business.genuiny.com/register/index?referralCode=" + localStorage.getItem("hash") 
  var subscribe_button = document.getElementById('link')
  subscribe_button.setAttribute('href', affiliate_registration)
}


var default_link = "https://www.google.com"
qrcode = new QRCode(document.getElementById("qr_div"), default_link);
link_desktop.innerHTML = default_link
link_desktop.href = default_link
function generateQRCode(){
    var value = undefined
    let link_desktop = document.getElementById("link_desktop")
    if (localStorage.getItem("hash") !== null){
        value = "https://business.genuiny.com/register/index?referralCode=" + localStorage.getItem("hash")
    }
    else{
        value = "https://www.google.com"
    }
    qrcode.clear()
    qrcode.makeCode(value);
    link_desktop.innerHTML = value
    link_desktop.href = value
}

const generate_btn = document.getElementById("generate_qr_btn")
generate_btn.addEventListener("click", generateQRCode)