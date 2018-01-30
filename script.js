const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log(hr+min+sec);

let hrPosition = 30*hr+(0.5*min)+(0.1/12*sec);
let minPosition = (6*min)+(0.1*sec);
let secPosition = 6*sec;


function runTheClock(){

    hrPosition+=1/120;
    minPosition+=0.1;
    secPosition+=6;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock,1000);



