let date = new Date();
let day = date.getDate();
let year = date.getFullYear();

let month = date.getMonth();
let monthLabels = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

let weekDay = date.getDay();
let weekDayLabels = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

//create function to grab day, month, date, year
function Day() {
    month = monthLabels[month];
    weekDay = weekDayLabels[weekDay];

    document.querySelector("#day").innerHTML = "I DAG ER" + "<span>" + weekDay.toUpperCase() + "</span>";
    document.querySelector("#date").innerHTML = month.toUpperCase() + " " + "<span>" + day + "</span>" + year;
}

Day();
