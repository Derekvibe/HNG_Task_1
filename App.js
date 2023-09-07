let real_time = document.getElementById ("currentUTCTime")
let TodayDate = document.getElementById ("currentDayOfTheWeek");

setInterval (() => {
    let T = new Date();
    real_time.innerHTML = T.toLocaleTimeString();
}, 1000)

let d = new Date ();
TodayDate.innerHTML = d.toLocaleDateString();