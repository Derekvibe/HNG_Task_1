let real_time = document.querySelector ('[data-testid="currentUTCTime"]')
let TodayDate = document.querySelector('[data-testid="currentDayOfTheWeek"]');

setInterval (() => {
    let T = new Date();
    real_time.innerHTML = T.toUTCString();
}, 1000)

let currentDate = new Date();

let dayOfWeek = currentDate.getDay();

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayName = daysOfWeek[dayOfWeek];

let dateString = currentDate.toLocaleDateString();

let dateAndDayString = "Today is" + " " + dayName;

TodayDate.textContent = dateAndDayString;

