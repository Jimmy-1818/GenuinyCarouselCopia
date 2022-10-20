//desktop_reform()
//add_container()


function desktop_reform(){
	const carousels = document.getElementsByClassName("carousel")
	for (var i = 0; i < carousels.length; i++) {
		var module_overflows = carousels[i].getElementsByClassName("module-overflow")
		var content = []
		for (var i2 = 0; i2 < module_overflows.length; i2++) {
			var momentary_content = []
			var module_title = carousels[i].getElementsByClassName("module-title")[i2]
			
			momentary_content.push('<div class="module-' + String(i2 + 1) + '">')
			if (i2 == 0) {
				momentary_content.push('<h1 class="first-module-title-desktop">' + module_title.textContent + '</h1>')
			}else{
				momentary_content.push('<h1 class="secondary-module-title-desktop">' + module_title.textContent + '</h1>')
			}
			momentary_content.push(module_overflows[i2].innerHTML)
			
			momentary_content.push('</div>')
			content.push(momentary_content.join(""))
		}
		if (!(carousels[i].classList.contains("keep-carousel"))){
			carousels[i].innerHTML = content.join("")
		}else{

		}
	}
	
	// remove "carousel" class so that navbar's on_scroll funcitons won't be called 
	carousel = document.getElementsByClassName("slide")
	for (var i3 = 0; i3 < carousel.length; i3++) {
	 	carousel[i3].classList.remove("carousel")
	 	carousel[i3].classList.add("common-div-desktop")
	 	carousel[i3].setAttribute("id", carousel[i3].id + "-desktop");
	}
	var change_target = document.getElementsByClassName("change-target")
	var target = "data-bs-target"
	for (var i = 0; i < change_target.length; i++) {
		var current_target = 
		change_target[i].setAttribute(target, change_target[i].getAttribute(target) + "-desktop")
	}
	carousel = document.getElementsByClassName("carousel")
}


function add_container(){
	document.getElementsByTagName("main")[0].classList.add("container")
}