let days = document.getElementById('days');
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let M_endDate = '01/01/2024 00:00:00';

let x = setInterval(function(){
    let now = new Date(M_endDate).getTime();
    let CountDown = new Date().getTime();
    let distance = now - CountDown;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000))

    days.innerHTML = d + "<br><span>Days</span>";
    hour.innerHTML = h + "<br><span>Hours</span>";
    min.innerHTML = m + "<br><span>Minutes</span>";
    sec.innerHTML = s + "<br><span>Seconds</span>";

    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
})