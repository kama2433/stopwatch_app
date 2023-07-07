 const pause = document.getElementById('pause')
 const reset = document.getElementById('reset')
 const start = document.getElementById('start')
let clock = document.getElementById('clock')

let [seconds, minutes, hours] = [0,0,0]
let timer = null

 function startTime() {
    seconds++
    if(seconds == 60) {
        seconds = 0
        minutes++
        if (minutes==60) {
            minutes = 0
            hours++
        }
    }

    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    clock.innerHTML = h + ":" + m + ':' + s
  }

 function startfunc() {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(startTime, 1000) 

 }

 function resetfunc() {
    clearInterval(timer)
    seconds = 0
    minutes = 0
    hours = 0
    clock.innerHTML = "00:00:00"


 }

 function pausefunc() {
    clearInterval(timer)

 }