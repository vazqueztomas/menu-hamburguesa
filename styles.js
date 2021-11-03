export default function styles () {
    const $d = document,
        $botones = $d.querySelectorAll('button'),
        $div = $d.getElementById('reloj'),
        $div_info = $d.getElementById('info-dia');

    $botones.forEach(e => {
        e.style.backgroundColor = '#4CAF50'
        e.style.padding = '1rem'
        e.style.border = 'none'
        e.style.borderRadius = '10px'
    });

    
    $div_info.style.fontSize = '1.5rem';
    $div_info.style.fontFamily = 'Zen Kaku Gothic Antique', 'sans-serif',
    $div.style.fontSize = '4rem';
    $div.style.fontFamily = 'Zen Kaku Gothic Antique', 'sans-serif'
}