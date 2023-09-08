let real_time = document.querySelector ('[data-testid="currentUTCTime"]')
let TodayDate = document.querySelector('[data-testid="currentDayOfTheWeek"]');
let dayElement = document.getElementById("dayOfWeek");

setInterval (() => {
    let T = new Date();
    real_time.innerHTML = T.toLocaleTimeString();
}, 1000)

let d = new Date ();
TodayDate.innerHTML = d.toLocaleDateString();


let currentDate = new Date();

let dayOfWeek = currentDate.getDay();

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayName = daysOfWeek[dayOfWeek];

dayElement.textContent = dayName;

