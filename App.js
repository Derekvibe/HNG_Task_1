let real_time = document.getElementById ("currentTime")
let TodayDate = document.getElementById ("currentDay");

setInterval (() => {
    let T = new Date();
    real_time.innerHTML = T.toLocaleTimeString();
}, 1000)

let d = new Date ();
TodayDate.innerHTML = d.toLocaleDateString();