var date = new Date();
var day = date.getDate();
var year = date.getFullYear();

var month = date.getMonth();
var monthLabels = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

var weekDay = date.getDay();
var weekDayLabels = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

//create function to grab day, month, date, year
function Day() {
    month = monthLabels[month];
    weekDay = weekDayLabels[weekDay];

    document.getElementById("day").innerHTML = "I DAG ER" + "<span>" + weekDay.toUpperCase() + "</span>";
    document.getElementById("date").innerHTML = month.toUpperCase() + " " + "<span>" + day + "</span>" + year;
}

Day();
