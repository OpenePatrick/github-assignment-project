const day=document.getElementById("days")
const hour=document.getElementById("hours")
const minute=document.getElementById("minutes")
const second=document.getElementById("seconds")

const months = [
    `January`,
    `Febuary`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
]

const weekdays = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
]


function updateTime(){
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
let month = months[currentMonth];
//console.log(month);

const weekDay = currentDate.getDate();

const futureDate = new Date(currentYear, currentMonth, weekDay + 10, 11, 30);

const time = futureDate - currentDate;

const dayA = Math.floor(time / (24 * 60 * 60 * 1000));
const hourA = Math.floor((time % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)));
const minuteA = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
const secondA = Math.floor(time % (60 * 1000) / (1000));

second.textContent = secondA;
minute.textContent = minuteA;
hour.textContent = hourA;
day.textContent = dayA;
}
interval = setInterval(updateTime, 1000);