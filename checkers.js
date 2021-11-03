export function checkTime(i){
    if (i<10){
        i = '0' + i;
    }
    return i;
}

export function checkDay(i){
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

export function checkMonth(i){
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