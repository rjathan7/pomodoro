// variables
let work = document.getElementById('work');
let breakt = document.getElementById('break');

let wt = 25;
let bt = 5;

let seconds = "00";

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = wt;
    document.getElementById('seconds').innerHTML = seconds; // Corrected typo

    work.classList.add('active');
}

// timer
function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59; // change time

    let wm = wt - 1;
    let bm = bt - 1;

    let breakCount = 0; // Initialize breakCount

    // countdown
    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = wm;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1; // countdown

        if (seconds === 0) {
            wm = wm - 1;
            if (wm === -1) { // Corrected variable name
                if (breakCount % 2 === 0) {
                    // start break
                    wm = bm;
                    breakCount++
                    // change panel
                    work.classList.remove('active');
                    breakt.classList.add('active');
                } else {
                    // keep going
                    wm = wt;
                    breakCount++
                    // change panel
                    breakt.classList.remove('active');
                    work.classList.add('active');
                }
            }
            seconds = 59;
        }
    }
    setInterval(timerFunction, 1000); // start countdown
}
