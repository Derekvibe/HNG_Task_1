//selecting the unique classes in the HTML i.e for the p tags in both the real_time and TodayDate
let real_time = document.querySelector ('[data-testid="currentUTCTime"]')
let TodayDate = document.querySelector('[data-testid="currentDayOfTheWeek"]');

  //setting the time format to UTC and a count of 1000ms
setInterval (() => {
    let T = new Date();

    real_time.innerHTML = T.getTime();
    
}, 1000)

//assigning a date varibe using let
let currentDate = new Date();


//get the number of days in  the week (0-6)
let dayOfWeek = currentDate.getDay();

//setting an array of the days of the week i.e sunday=0, monday=1, tuesday=2 etc
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayName = daysOfWeek[dayOfWeek];

// converts the current day number into a string i.e if today= 5 then it fetches the array number 5 i.e friday
let dateString = currentDate.toLocaleDateString();

let dateAndDayString = dayName;

TodayDate.textContent = dateAndDayString;

