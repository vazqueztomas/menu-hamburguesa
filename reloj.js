import { checkDay, checkMonth , checkTime } from "./checkers.js";


const $d = document,
    $div = $d.getElementById('reloj'),
    $div_info = $d.getElementById('info-dia');
export default function reloj (){
    let today = new Date(),
        day = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear(),
        seconds = today.getSeconds(),
        minutes = today.getMinutes(),
        hours = today.getHours();

        minutes = checkTime(minutes)
        seconds = checkTime(seconds)

        day = checkDay(day)
        month = checkMonth(month)
        $div_info.innerHTML = `Hoy es ${day} ${dayNum} de ${month} del ${year}`
    
        $div.innerHTML = `${hours}:${minutes}:${seconds}`
   
    let tempo = setTimeout(function(){
        reloj()
    },1000)
}
