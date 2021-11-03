const $d = document,
    $div = $d.getElementById('reloj'),
    $div_info = $d.getElementById('info-dia');
export default function reloj (){
    let today = new Date(),
        day = today.getDay(),
        month = today.getMonth(),
        year = today.getFullYear(),
        seconds = today.getSeconds(),
        minutes = today.getMinutes(),
        hours = today.getHours();

        minutes = checkTime(minutes)
        seconds = checkTime(seconds)

        day = checkDay(day)
        month = checkMonth(month)
        $div_info.innerHTML = `Hoy es ${day} de ${month} del ${year}`
    
        $div.innerHTML = `${hours}:${minutes}:${seconds}`
   
    let tempo = setTimeout(function(){
        reloj()
    },1000)
}
function checkTime(i){
    if (i<10){
        i = '0' + i;
    }
    return i;
}

function checkDay(i){
    if (i == 0){
        i = 'domingo'
    } else if (i == 1){
        i = 'lunes'
    } else if (i == 2){
        i = 'martes'
    } else if (i == 3){
        i = 'miercoles'
    } else if (i == 4){
        i = 'jueves'
    } else if (i == 5){
        i = 'viernes'
    } else {
        i  = 'sabado'
    }
    return i;
}

function checkMonth(i){
    const meses = {
        0 : 'enero',
        1 : 'febrero',
        2 : 'marzo',
        3 : 'abril',
        4 : 'mayo',
        5 : 'junio',
        6 : 'julio',
        7 : 'agosto',
        8 : 'septiembre',
        9 : 'octubre',
        10 : 'noviembre',
        11 : 'diciembre'
    }

    const mes_actual = meses[i]
    return mes_actual
}
$div_info.style.fontSize = '4rem';
$div_info.style.fontFamily = 'Roboto, sans-serif' 
$div.style.fontSize = '4rem';
$div.style.fontFamily = 'Roboto, sans-serif'