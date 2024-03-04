var monthly = 0
var s1 = s2 = s3 = s4 = s5 = 0
var l1_a = l2_a = result_a = 0
var l1_r = l2_r = l3_r = l4_r = l5_r = l6_r = l7_r = result_r = 0

var input = document.getElementsByClassName("input");


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
        else{
            return Number(number).toLocaleString("en", {minimumFractionDigits: 0});
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
        else{
            return Intl.NumberFormat("en", { style: "currency", "currency":"EUR" }).format(number);
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
    s6 = number_strip(document.getElementById("tip6").value)
    s7 = number_strip(document.getElementById("tip7").value)

    l1_a = (s1*10)
    l2_a = (s2*5) 
    result_a = l1_a + l2_a

    l1_r = (s1*(monthly/100))
    l2_r = (s2*(monthly/100))
    l3_r = (s3*(monthly/100))
    l4_r = (s4*(monthly/100))
    l5_r = (s5*(monthly/100))
    l6_r = (s6*(monthly/100))
    l7_r = (s7*(monthly/100))
    result_r = l1_r + l2_r + l3_r + l4_r + l5_r + l6_r + l7_r
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

    document.getElementById("tab2_u3").innerHTML = format_user(s3)

    document.getElementById("tab2_u4").innerHTML = format_user(s4)

    document.getElementById("tab2_u5").innerHTML = format_user(s5)

    document.getElementById("tab2_u6").innerHTML = format_user(s6)
    
    document.getElementById("tab2_u7").innerHTML = format_user(s7)

/**bottom line**/
    var tot_utenti_a = Number(s1) + Number(s2)
    var tot_utenti_r = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5) + Number(s6) + Number(s7)
    document.getElementById("tab1_u12").innerHTML = format_user(tot_utenti_a)
    document.getElementById("tab2_u1234567").innerHTML = format_user(tot_utenti_r)

/**last column**/
    document.getElementById("tab1_p1").innerHTML = format_prize(l1_a)
    document.getElementById("tab2_p1").innerHTML = format_prize(l1_r)

    document.getElementById("tab1_p2").innerHTML = format_prize(l2_a)
    document.getElementById("tab2_p2").innerHTML = format_prize(l2_r)

    document.getElementById("tab2_p3").innerHTML = format_prize(l3_r)

    document.getElementById("tab2_p4").innerHTML = format_prize(l4_r)

    document.getElementById("tab2_p5").innerHTML = format_prize(l5_r)

    document.getElementById("tab2_p6").innerHTML = format_prize(l5_r)
  
    document.getElementById("tab2_p7").innerHTML = format_prize(l5_r)

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
        if (numbers_count < 6){
            results_scoped[i].classList.remove('reduce-1', 'reduce-2', 'reduce-3', 'reduce-4')
        }
        else if (numbers_count > 10){
            if (!(results_scoped[i].classList.contains('reduce-4'))){
                results_scoped[i].classList.add('reduce-4');
                results_scoped[i].classList.remove('reduce-1', 'reduce-2', 'reduce-3')
            }
        }
        else if (numbers_count > 9){
            if (!(results_scoped[i].classList.contains('reduce-3'))){
                results_scoped[i].classList.add('reduce-3');
                results_scoped[i].classList.remove('reduce-1', 'reduce-2', 'reduce-4')
            }
        }
        else if (numbers_count > 7){
            if (!(results_scoped[i].classList.contains('reduce-2'))){
                results_scoped[i].classList.add('reduce-2');
                results_scoped[i].classList.remove('reduce-1', 'reduce-3', 'reduce-4')
            }
        }
        else if (numbers_count > 5){
            if (!(results_scoped[i].classList.contains('reduce-1'))){
                results_scoped[i].classList.add('reduce-1')
                results_scoped[i].classList.remove('reduce-2', 'reduce-3', 'reduce-4');
            }
        }
    }
}


function on_input(){
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

on_input()
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('input', on_input)
} 
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', on_input)
} 
document.getElementById("tip_monthly").addEventListener("input", on_input)