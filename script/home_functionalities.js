
const mobile_body = document.getElementsByTagName("body")[0].innerHTML
var layout_mobile = true
function home_on_resize(){
	var page_width = $(window).width()
	if ((page_width >= 1024) && (layout_mobile)){
		layout_mobile = false
		desktop_reform()
		add_container()
		remove_event_listener()
		on_scroll()
	}else if ((page_width < 1024) && !(layout_mobile)){
		layout_mobile = true
		document.getElementsByTagName("body")[0].innerHTML = mobile_body
		replace_event_listener()
		on_scroll()
		hamburger_listener()
	}
}

//window.onresize = home_on_resize
home_on_resize()

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
		}
	}
	
	// remove "carousel" class so that navbar's on_scroll funcitons won't be called 
	carousel = document.getElementsByClassName("slide")
	for (var i3 = 0; i3 < carousel.length; i3++) {
	 	if (!(carousel[i3].classList.contains("keep-carousel"))){
	 		carousel[i3].classList.remove("carousel")
	 	}
	 	carousel[i3].classList.add("common-div-desktop")
	 	carousel[i3].setAttribute("id", carousel[i3].id + "-desktop");
	}
	var change_target = document.getElementsByClassName("change-target")
	var target = "data-bs-target"
	for (var i4 = 0; i4 < change_target.length; i4++) {
		var current_target = 
		change_target[i4].setAttribute(target, change_target[i4].getAttribute(target) + "-desktop")
	}
	carousel = document.getElementsByClassName("carousel")

	const carousel_app_desktop = document.getElementById("carousel-app-desktop")
	const inner_app = carousel_app_desktop.getElementsByClassName("carousel-inner")[0]
	const image_app = inner_app.children[0].getElementsByTagName("img")[0]
	var app_title = inner_app.children[0].getElementsByTagName("h1")[0].textContent
	inner_app.children[0].remove()
	image_app.classList.add("app-image")

	// add to the NOW first
	inner_app.children[0].classList.add("active")
	carousel_app_desktop.innerHTML = '<h1 class="first-module-title-desktop">' + app_title + '</h1>' + image_app.outerHTML + carousel_app_desktop.innerHTML
	
	const indicators_buttons = carousel_app_desktop.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("button")
	indicators_buttons[indicators_buttons.length - 1].remove()
}


function add_container(){
	document.getElementsByTagName("main")[0].classList.add("container")
}

function remove_container(){
	document.getElementsByTagName("main")[0].classList.remove("container")
}

function remove_event_listener(){
	for (var i = 0; i < carousel_control.length; i++) {
		carousel_control[i].removeEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < carousel_indicators.length; i++) {
		carousel_indicators[i].removeEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < control_next.length; i++) {
		control_next[i].removeEventListener("click", scroll_fix)
	}
	for (var i = 0; i < indicators.length; i++) {
		indicators[i].removeEventListener("click", scroll_fix)
	}
};

function replace_event_listener(){
	for (var i = 0; i < carousel_control.length; i++) {
		carousel_control[i].addEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < carousel_indicators.length; i++) {
		carousel_indicators[i].addEventListener("click", delayed_next_h1)
	}

	for (var i = 0; i < control_next.length; i++) {
		control_next[i].addEventListener("click", scroll_fix)
	}
	for (var i = 0; i < indicators.length; i++) {
		indicators[i].addEventListener("click", scroll_fix)
	}
};