
/****Run everything on every change in one of the input through autentica_cacl()**/

document.getElementById("tip_monthly").addEventListener("change", on_slider_change);
document.getElementById("tip1").addEventListener("change", on_slider_change);
document.getElementById("tip2").addEventListener("change", on_slider_change);
document.getElementById("tip3").addEventListener("change", on_slider_change);
document.getElementById("tip4").addEventListener("change", on_slider_change);
document.getElementById("tip5").addEventListener("change", on_slider_change);


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


function format_user(number){
    return Number(number).toLocaleString("es-ES", {minimumFractionDigits: 0});
}


function format_prize(number){
    return new Intl.NumberFormat("de-DE", { style: "currency", "currency":"EUR" }).format(number);
}

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

function vars_def(){
    monthly = document.getElementById("tip_monthly").value

    s1 = document.getElementById("tip1").value
    s2 = document.getElementById("tip2").value
    s3 = document.getElementById("tip3").value
    s4 = document.getElementById("tip4").value
    s5 = document.getElementById("tip5").value

    l1_a = (s1*10)
    l2_a = (s1*s2*0.5) 
    l3_a = (s1*s2*s3*1)
    l4_a = (s1*s2*s3*s4*1.5)
    l5_a = (s1*s2*s3*s4*s5*2)
    result_a = l1_a + l2_a + l3_a + l4_a + l5_a

    l1_r = (s1*(monthly/50))
    l2_r = (s1*s2*(monthly/100))
    l3_r = (s1*s2*s3*(monthly/100))
    l4_r = (s1*s2*s3*s4*(monthly/100))
    l5_r = (s1*s2*s3*s4*s5*(monthly/50))
    result_r = l1_r + l2_r + l3_r + l4_r + l5_r
}


function slider_value_update(){
    /** + monthly tab**/
    var monthly_s = document.getElementsByClassName("monthly") 
    for (var i = 0; i < monthly_s.length; i++){
    document.getElementsByClassName("monthly")[i].innerHTML = monthly + " €"
    }

    document.getElementById("slider-value-1").innerHTML = "x"+ s1
    document.getElementById("slider-value-2").innerHTML = "x"+ s2
    document.getElementById("slider-value-3").innerHTML = "x"+ s3
    document.getElementById("slider-value-4").innerHTML = "x"+ s4
    document.getElementById("slider-value-5").innerHTML = "x"+ s5
}

function tab_value_update(){
/**odd lines first column (no 1st)**/
    document.getElementById("tab1_m1").innerHTML = s1
    document.getElementById("tab2_m1").innerHTML = s1

    document.getElementById("tab1_m2").innerHTML = 'x'+s2
    document.getElementById("tab2_m2").innerHTML = 'x'+s2

    document.getElementById("tab1_m3").innerHTML = 'x'+s3
    document.getElementById("tab2_m3").innerHTML = 'x'+s3

    document.getElementById("tab1_m4").innerHTML = 'x'+s4
    document.getElementById("tab2_m4").innerHTML = 'x'+s4

    document.getElementById("tab1_m5").innerHTML = 'x'+s5
    document.getElementById("tab2_m5").innerHTML = 'x'+s5

/**event lines first column (no 2nd line)**/
    document.getElementById("tab1_u2").innerHTML = format_user(s1*s2)
    document.getElementById("tab2_u2").innerHTML = format_user(s1*s2)

    document.getElementById("tab1_u3").innerHTML = format_user(s1*s2*s3)
    document.getElementById("tab2_u3").innerHTML = format_user(s1*s2*s3)

    document.getElementById("tab1_u4").innerHTML = format_user(s1*s2*s3*s4)
    document.getElementById("tab2_u4").innerHTML = format_user(s1*s2*s3*s4)

    document.getElementById("tab1_u5").innerHTML = format_user(s1*s2*s3*s4*s5)
    document.getElementById("tab2_u5").innerHTML = format_user(s1*s2*s3*s4*s5)

/**bottom line**/
    var tot_utenti = Number(s1) + Number(s1*s2) + Number(s1*s2*s3) + Number(s1*s2*s3*s4) + Number(s1*s2*s3*s4*s5)
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


function on_slider_change(){
    reconstruct_branch()
    vars_def()
    slider_value_update()
    tab_value_update()


    document.getElementsByClassName("autentica_result")[0].innerHTML = format_prize(result_a)
    document.getElementsByClassName("autentica_result")[1].innerHTML = format_prize(result_a)

    document.getElementsByClassName("rendita_result")[0].innerHTML = format_prize(result_r)
    document.getElementsByClassName("rendita_result")[1].innerHTML = format_prize(result_r)
}


on_slider_change()
