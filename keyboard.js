const d = document;


export function shortCuts(e){
    console.log(e);
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.altKey)
    console.log(e.shiftKey)
    console.log(e.ctrlKey)

    if (e.key === 'a' && e.altKey){
        alert('Lanzaste una alerta')
    }
}