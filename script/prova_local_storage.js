


if (localStorage.getItem("prova") == null){
	localStorage.setItem("prova", window.location.href);
	console.log(localStorage.getItem("prova"))
}


document.getElementById("prova").innerHTML = localStorage.getItem("prova")

