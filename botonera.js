export default function botonera(activarReloj, desactivarReloj){
    const $d = document,
        $reloj = $d.getElementById('reloj'),
        $btn_activa = $d.getElementById('iniciar-reloj');

    
        $d.addEventListener('click', (e) => {
            if (e.target.matches(activarReloj)) {
                $reloj.classList.toggle('reloj-activo');
                $reloj.style.display = 'block';
                $btn_activa.disabled = true;
            }
    
            if (e.target.matches(desactivarReloj)){
                $reloj.style.display = 'none';
                $btn_activa.disabled = false;
            }
        })
}