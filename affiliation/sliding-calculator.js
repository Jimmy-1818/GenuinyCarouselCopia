


/****Run everything on every change in one of the input through autentica_cacl()**/

document.getElementById("tip_monthly").addEventListener("change", on_focus);
document.getElementById("tip1").addEventListener("change", on_focus);
document.getElementById("tip2").addEventListener("change", on_focus);
document.getElementById("tip3").addEventListener("change", on_focus);
document.getElementById("tip4").addEventListener("change", on_focus);
document.getElementById("tip5").addEventListener("change", on_focus);

document.getElementById("tip_monthly").addEventListener("focus", on_focus);
document.getElementById("tip1").addEventListener("focus", on_focus);
document.getElementById("tip2").addEventListener("focus", on_focus);
document.getElementById("tip3").addEventListener("focus", on_focus);
document.getElementById("tip4").addEventListener("focus", on_focus);
document.getElementById("tip5").addEventListener("focus", on_focus);


var monthly = 0

var s1 = 0
var s2 = 0
var s3 = 0
var s4 = 0
var s5 = 0


var l1_a = 0
var l2_a = 0
var l3_a = 0
var l4_a = 0
var l5_a = 0
var result_a = 0


var l1_r = 0
var l2_r = 0
var l3_r = 0
var l4_r = 0
var l5_r = 0
var result_r = 0

function is_number(number){
    if (number.replaceAll('.', '') != number_strip(number)){
        return false
    }
    else{
        return true
    }
}

function number_strip(number){
    number = number.replace(/\D/g, '')
    return number
}

function format_user(number){
    //fallback on english (once not "not english")
    var browser_language = navigator.language || navigator.userLanguage;
    if (localStorage.getItem("lang_set") == null){
        if (!browser_language.includes("en")){
            return Number(number).toLocaleString("it", {minimumFractionDigits: 0});
        }
    }else if (localStorage.getItem("lang_set") != "eng"){
        return Number(number).toLocaleString("it", {minimumFractionDigits: 0});
    }else{
        return Number(number).toLocaleString("en", {minimumFractionDigits: 0});
    }
};


function format_prize(number){
    //fallback on english (once not "not english")
    var browser_language = navigator.language || navigator.userLanguage;
    if (localStorage.getItem("lang_set") == null){
        if (!browser_language.includes("en")){
            return Intl.NumberFormat("it", { style: "currency", "currency":"EUR" }).format(number);
        }
    }else if (localStorage.getItem("lang_set") != "eng"){
        return Intl.NumberFormat("it", { style: "currency", "currency":"EUR" }).format(number);
    }else{
        return Intl.NumberFormat("en", { style: "currency", "currency":"EUR" }).format(number);
    }
};

/***
function reconstruct_branch(){
    var input_s = document.getElementsByClassName("input")
    var higher_not_0 = 0
    for (let i = 0; i < input_s.length; i++){
        if (document.getElementsByClassName("input")[i].value > 0){
            higher_not_0 = i 
        }
    }
    for (let i = 0; i <= higher_not_0; i++){
        if (document.getElementsByClassName("input")[i].value == 0){
            document.getElementsByClassName("input")[i].value = 1
        }
    }
}
****/

function vars_def(){
    monthly = document.getElementById("tip_monthly").value



    s1 = number_strip(document.getElementById("tip1").value)
    s2 = number_strip(document.getElementById("tip2").value)
    s3 = number_strip(document.getElementById("tip3").value)
    s4 = number_strip(document.getElementById("tip4").value)
    s5 = number_strip(document.getElementById("tip5").value)

    l1_a = (s1*10)
    l2_a = (s2*0.5) 
    l3_a = (s3*1)
    l4_a = (s4*1.5)
    l5_a = (s5*2)
    result_a = l1_a + l2_a + l3_a + l4_a + l5_a

    l1_r = (s1*(monthly/50))
    l2_r = (s2*(monthly/100))
    l3_r = (s3*(monthly/100))
    l4_r = (s4*(monthly/100))
    l5_r = (s5*(monthly/50))
    result_r = l1_r + l2_r + l3_r + l4_r + l5_r
}


function slider_value_update(){
    /** + monthly tab**/
    var monthly_s = document.getElementsByClassName("monthly") 
    for (var i = 0; i < monthly_s.length; i++){
        document.getElementsByClassName("monthly")[i].innerHTML = monthly + " €"
    }
}

function tab_value_update(){

    document.getElementById("tab1_u1").innerHTML = format_user(s1)
    document.getElementById("tab2_u1").innerHTML = format_user(s1)

    document.getElementById("tab1_u2").innerHTML = format_user(s2)
    document.getElementById("tab2_u2").innerHTML = format_user(s2)

    document.getElementById("tab1_u3").innerHTML = format_user(s3)
    document.getElementById("tab2_u3").innerHTML = format_user(s3)

    document.getElementById("tab1_u4").innerHTML = format_user(s4)
    document.getElementById("tab2_u4").innerHTML = format_user(s4)

    document.getElementById("tab1_u5").innerHTML = format_user(s5)
    document.getElementById("tab2_u5").innerHTML = format_user(s5)

/**bottom line**/
    var tot_utenti = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5)
    document.getElementById("tab1_u12345").innerHTML = format_user(tot_utenti)
    document.getElementById("tab2_u12345").innerHTML = format_user(tot_utenti)

/**last column**/
    document.getElementById("tab1_p1").innerHTML = format_prize(l1_a)
    document.getElementById("tab2_p1").innerHTML = format_prize(l1_r)

    document.getElementById("tab1_p2").innerHTML = format_prize(l2_a)
    document.getElementById("tab2_p2").innerHTML = format_prize(l2_r)

    document.getElementById("tab1_p3").innerHTML = format_prize(l3_a)
    document.getElementById("tab2_p3").innerHTML = format_prize(l3_r)

    document.getElementById("tab1_p4").innerHTML = format_prize(l4_a)
    document.getElementById("tab2_p4").innerHTML = format_prize(l4_r)

    document.getElementById("tab1_p5").innerHTML = format_prize(l5_a)
    document.getElementById("tab2_p5").innerHTML = format_prize(l5_r)

}


var input = document.getElementsByClassName("input");
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('input', on_focus)
} 
function alternative_format_input(){
    for (let i = 0; i < input.length; i++){
        if (input[i].value == '' || input[i].value == 0 || (!is_number(input[i].value) & !input[i].value.includes(','))){
            input[i].value = ''
        }
        else if (input[i].value.length > 13){
            input[i].value = "9.999.999.999"
        }
        else{
            input[i].value = format_user(number_strip(input[i].value))
        }

    }
}



//format_input()
var i = 0
function format_input(){
    var input = document.getElementsByClassName("input");
    for (let i = 0; i < input.length; i++){
        input[i].addEventListener('input', function(evt){
        console.log(input[i].value)
        var n = parseInt(this.value.replace(/\D/g,''),10);
        if (input[i].value == '' || input[i].value == 0 || !is_number(input[i].value)){
            n = ''
        }
        else if (input[i].value.length > 13){
            n = "9.999.999.999"
        }
        input[i].value = n.toLocaleString();
    }, false);}
}

function resize_result(){
    var results_scoped = document.getElementsByClassName("resize-text")
    for (var i = 0; i < results_scoped.length; i++) {

        /* count just the numbers */
        var numbers_count = number_strip(results_scoped[i].textContent).length - number_strip(results_scoped[i].textContent.replace(/[0-9]/g,'')).length
        if (i == 0){
        }
        if (numbers_count < 6){
            results_scoped[i].classList.remove("reduce-1")
            results_scoped[i].classList.remove("reduce-2")
            results_scoped[i].classList.remove("reduce-3")
            results_scoped[i].classList.remove("reduce-4")
        }
        else if (numbers_count > 10){
            if (!(results_scoped[i].classList.contains("reduce-4"))){
                results_scoped[i].classList.add("reduce-4");
                results_scoped[i].classList.remove("reduce-1")
                results_scoped[i].classList.remove("reduce-2")
                results_scoped[i].classList.remove("reduce-3")
            }
        }
        else if (numbers_count > 9){
            if (!(results_scoped[i].classList.contains("reduce-3"))){
                results_scoped[i].classList.add("reduce-3");
                results_scoped[i].classList.remove("reduce-1")
                results_scoped[i].classList.remove("reduce-2")
                results_scoped[i].classList.remove("reduce-4")
            }
        }
        else if (numbers_count > 7){
            if (!(results_scoped[i].classList.contains("reduce-2"))){
                results_scoped[i].classList.add("reduce-2");
                results_scoped[i].classList.remove("reduce-1")
                results_scoped[i].classList.remove("reduce-3")
                results_scoped[i].classList.remove("reduce-4")
            }
        }
        else if (numbers_count > 5){
            if (!(results_scoped[i].classList.contains("reduce-1"))){
                results_scoped[i].classList.add("reduce-1");
                results_scoped[i].classList.remove("reduce-2")
                results_scoped[i].classList.remove("reduce-3")
                results_scoped[i].classList.remove("reduce-4")
            }
        }
    }
}


function on_focus(){
    //reconstruct_branch()
    alternative_format_input()
    vars_def()
    slider_value_update()
    tab_value_update()

    document.getElementsByClassName("autentica_result")[0].innerHTML = format_prize(result_a)
    document.getElementsByClassName("autentica_result")[1].innerHTML = format_prize(result_a)

    document.getElementsByClassName("rendita_result")[0].innerHTML = format_prize(result_r)
    document.getElementsByClassName("rendita_result")[1].innerHTML = format_prize(result_r)

    resize_result()
}

on_focus()





///****Run everything on every change in one of the input through autentica_cacl()**/
//
//document.getElementById("tip_monthly").addEventListener("change", on_slider_change);
//document.getElementById("tip1").addEventListener("change", on_slider_change);
//document.getElementById("tip2").addEventListener("change", on_slider_change);
//document.getElementById("tip3").addEventListener("change", on_slider_change);
//document.getElementById("tip4").addEventListener("change", on_slider_change);
//document.getElementById("tip5").addEventListener("change", on_slider_change);
//
//
//var monthly = 0
//var s1 = s2 = s3 = s4 = s5 = 0
//var l1_a = l2_a = l3_a = l4_a = l5_a = result_a = 0
//var l1_r = l2_r = l3_r = l4_r = l5_r = result_r = 0
//
//
//function format_user(number){
//    //fallback on english (once not "not english")
//    var browser_language = navigator.language || navigator.userLanguage;
//    if (localStorage.getItem("lang_set") == null){
//        if (!browser_language.includes("en")){
//            return Number(number).toLocaleString("it", {minimumFractionDigits: 0});
//        }
//    }else if (localStorage.getItem("lang_set") != "eng"){
//        return Number(number).toLocaleString("it", {minimumFractionDigits: 0});
//    }else{
//        return Number(number).toLocaleString("en", {minimumFractionDigits: 0});
//    }
//};
//
//
//function format_prize(number){
//    //fallback on english (once not "not english")
//    var browser_language = navigator.language || navigator.userLanguage;
//    if (localStorage.getItem("lang_set") == null){
//        if (!browser_language.includes("en")){
//            return Intl.NumberFormat("it", { style: "currency", "currency":"EUR" }).format(number);
//        }
//    }else if (localStorage.getItem("lang_set") != "eng"){
//        return Intl.NumberFormat("it", { style: "currency", "currency":"EUR" }).format(number);
//    }else{
//        return Intl.NumberFormat("en", { style: "currency", "currency":"EUR" }).format(number);
//    }
//};
//
//function reconstruct_branch(){
//    var input_s = document.getElementsByClassName("input")
//    var higher_not_0 = 0
//    for (let i = 0; i < input_s.length; i++){
//        if (document.getElementsByClassName("input")[i].value > 0){
//            higher_not_0 = i 
//        }
//    }
//    for (let i = 0; i < higher_not_0; i++){
//        if (document.getElementsByClassName("input")[i].value == 0){
//            document.getElementsByClassName("input")[i].value = 1
//        }
//    }
//};
//
//function vars_def(){
//    monthly = document.getElementById("tip_monthly").value
//
//    s1 = document.getElementById("tip1").value
//    s2 = document.getElementById("tip2").value
//    s3 = document.getElementById("tip3").value
//    s4 = document.getElementById("tip4").value
//    s5 = document.getElementById("tip5").value
//
//    l1_a = (s1*10)
//    l2_a = (s1*s2*0.5) 
//    l3_a = (s1*s2*s3*1)
//    l4_a = (s1*s2*s3*s4*1.5)
//    l5_a = (s1*s2*s3*s4*s5*2)
//    result_a = l1_a + l2_a + l3_a + l4_a + l5_a
//
//    l1_r = (s1*(monthly/50))
//    l2_r = (s1*s2*(monthly/100))
//    l3_r = (s1*s2*s3*(monthly/100))
//    l4_r = (s1*s2*s3*s4*(monthly/100))
//    l5_r = (s1*s2*s3*s4*s5*(monthly/50))
//    result_r = l1_r + l2_r + l3_r + l4_r + l5_r
//};
//
//
//function slider_value_update(){
//    /** + monthly tab**/
//    var monthly_s = document.getElementsByClassName("monthly") 
//    for (var i = 0; i < monthly_s.length; i++){
//    document.getElementsByClassName("monthly")[i].innerHTML = monthly + " €"
//    }
//
//    document.getElementById("slider-value-1").innerHTML = "x"+ s1
//    document.getElementById("slider-value-2").innerHTML = "x"+ s2
//    document.getElementById("slider-value-3").innerHTML = "x"+ s3
//    document.getElementById("slider-value-4").innerHTML = "x"+ s4
//    document.getElementById("slider-value-5").innerHTML = "x"+ s5
//};
//
//function tab_value_update(){
///**odd lines first column (no 1st)**/
//    document.getElementById("tab1_m1").innerHTML = s1
//    document.getElementById("tab2_m1").innerHTML = s1
//
//    document.getElementById("tab1_m2").innerHTML = 'x'+s2
//    document.getElementById("tab2_m2").innerHTML = 'x'+s2
//
//    document.getElementById("tab1_m3").innerHTML = 'x'+s3
//    document.getElementById("tab2_m3").innerHTML = 'x'+s3
//
//    document.getElementById("tab1_m4").innerHTML = 'x'+s4
//    document.getElementById("tab2_m4").innerHTML = 'x'+s4
//
//    document.getElementById("tab1_m5").innerHTML = 'x'+s5
//    document.getElementById("tab2_m5").innerHTML = 'x'+s5
//
///**event lines first column (no 2nd line)**/
//    document.getElementById("tab1_u2").innerHTML = format_user(s1*s2)
//    document.getElementById("tab2_u2").innerHTML = format_user(s1*s2)
//
//    document.getElementById("tab1_u3").innerHTML = format_user(s1*s2*s3)
//    document.getElementById("tab2_u3").innerHTML = format_user(s1*s2*s3)
//
//    document.getElementById("tab1_u4").innerHTML = format_user(s1*s2*s3*s4)
//    document.getElementById("tab2_u4").innerHTML = format_user(s1*s2*s3*s4)
//
//    document.getElementById("tab1_u5").innerHTML = format_user(s1*s2*s3*s4*s5)
//    document.getElementById("tab2_u5").innerHTML = format_user(s1*s2*s3*s4*s5)
//
///**bottom line**/
//    var tot_utenti = Number(s1) + Number(s1*s2) + Number(s1*s2*s3) + Number(s1*s2*s3*s4) + Number(s1*s2*s3*s4*s5)
//    document.getElementById("tab1_u12345").innerHTML = format_user(tot_utenti)
//    document.getElementById("tab2_u12345").innerHTML = format_user(tot_utenti)
//
///**last column**/
//    document.getElementById("tab1_p1").innerHTML = format_prize(l1_a)
//    document.getElementById("tab2_p1").innerHTML = format_prize(l1_r)
//
//    document.getElementById("tab1_p2").innerHTML = format_prize(l2_a)
//    document.getElementById("tab2_p2").innerHTML = format_prize(l2_r)
//
//    document.getElementById("tab1_p3").innerHTML = format_prize(l3_a)
//    document.getElementById("tab2_p3").innerHTML = format_prize(l3_r)
//
//    document.getElementById("tab1_p4").innerHTML = format_prize(l4_a)
//    document.getElementById("tab2_p4").innerHTML = format_prize(l4_r)
//
//    document.getElementById("tab1_p5").innerHTML = format_prize(l5_a)
//    document.getElementById("tab2_p5").innerHTML = format_prize(l5_r)
//
//};
//
//function results_update(){
//    document.getElementsByClassName("autentica_result")[0].innerHTML = format_prize(result_a)
//    document.getElementsByClassName("autentica_result")[1].innerHTML = format_prize(result_a)
//
//    document.getElementsByClassName("rendita_result")[0].innerHTML = format_prize(result_r)
//    document.getElementsByClassName("rendita_result")[1].innerHTML = format_prize(result_r)
//};
//
//
//
//function on_slider_change(){
//    reconstruct_branch()
//    vars_def()
//    slider_value_update()
//    tab_value_update()
//    results_update()
//}
//
//
//on_slider_change()
