let real_time = document.querySelector ('[data-testid="currentUTCTime"]')
let TodayDate = document.querySelector('[data-testid="currentDayOfTheWeek"]');
// let dayElement = document.getElementById("dayOfWeek");

setInterval (() => {
    let T = new Date();
    real_time.innerHTML = T.toLocaleTimeString();
}, 1000)

let currentDate = new Date();

let dayOfWeek = currentDate.getDay();

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayName = daysOfWeek[dayOfWeek];

let dateString = currentDate.toLocaleDateString();

let dateAndDayString = dayName + ", " + dateString;

TodayDate.textContent = dateAndDayString;


