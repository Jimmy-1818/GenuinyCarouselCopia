//remove_carousel()
//add_container()


function remove_carousel(){
	const carousels = document.getElementsByClassName("carousel")
	for (var i = 0; i < carousels.length; i++) {
		var module_overflows = carousels[i].getElementsByClassName("module-overflow")
		var content = []
		for (var i2 = 0; i2 < module_overflows.length; i2++) {
			var momentary_content = []
			momentary_content.push('<div class="module-' + String(i2 + 1) + '">')
			momentary_content.push(module_overflows[i2].innerHTML)
			momentary_content.push('</div>')
			content.push(momentary_content.join(""))
		}
		carousels[i].innerHTML = content.join("")
	}
	
	// remove "carousel" class so that navbar's on_scroll funcitons won't be called 
	carousel = document.getElementsByClassName("slide")
	for (var i3 = 0; i3 < carousel.length; i3++) {
	 	carousel[i3].classList.remove("carousel")
	 	carousel[i3].setAttribute("id", carousel[i3].id + "-desktop");
	}
	carousel = document.getElementsByClassName("carousel")
}


function add_container(){
	document.getElementsByTagName("main")[0].classList.add("container")
}