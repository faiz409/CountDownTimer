const newYears = "5 may 2021";

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, mins, seconds);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('seconds').innerHTML = seconds;
}
//intialcall
countdown();

setInterval(countdown, 1000);