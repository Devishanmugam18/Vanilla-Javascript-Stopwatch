let [hrs, mins, secs, msecs] = [0, 0, 0, 0];
let secObj = document.getElementById('secs')
let minObj = document.getElementById('mins')
let hrsObj = document.getElementById('hrs')
let msecsObj = document.getElementById('msecs')
/*let h = document.getElementById('h')
let hFont = h.style.fontSize = 3
let m = document.getElementById('m')
let mFont = m.style.fontSize = 3
let s = document.getElementById('s')
let sFont = s.style.fontSize = 3*/

let timer = null

function startTimer() {
    msecs++
    if (msecs == 100) {
        msecs = 0
        secs++
        if (secs == 60) {
            secs = 0
            mins++
            if (mins == 60) {
                mins = 0
                hrs++

            }

        }
    }
    msecsObj.innerHTML = msecs < 10 ? "0" + msecs : msecs
    secObj.innerHTML = secs < 10 ? "0" + secs : secs
    minObj.innerHTML = mins < 10 ? "0" + mins : mins
    hrsObj.innerHTML = hrs < 10 ? "0" + hrs : hrs



}

buttonStart.onclick = function () {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(startTimer, 10)

}

buttonStop.onclick = function () {

    clearInterval(timer)
}
buttonReset.onclick = function () {
    clearInterval(timer)
    hrs = 0
    mins = 0
    secs = 0
    msecs = 0
    msecsObj.innerHTML = "00"
    secObj.innerHTML = "00"
    minObj.innerHTML = "00"
    hrsObj.innerHTML = "00"
}






