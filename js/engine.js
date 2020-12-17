let today = new Date(2020, 3, 11)// heure fictif d'aujourd'hui == 11 Avril 2020

/*traitement*/
let day = today.getDate()
let day_str = (day<10?"0":"") + day

let month = today.getMonth() + 1
let month_str = (month<10?"0":"") + month
let year = "" + today.getFullYear()


let today_str = day_str + "/" + month_str + "/" + year ;

(function () {

    let res = test_results.filter(e => e.dateTest === today_str)[0]

    let new_case = res.newCase;
    let hard_case = res.hardCase;
    let dead_case = res.deadCase;

    let nbr_result = document.getElementsByClassName("nbr-result")
    nbr_result[0].innerHTML = new_case
    nbr_result[1].innerHTML = hard_case
    nbr_result[2].innerHTML = dead_case

})()