export default function styles () {
    const $d = document,
        $botones = $d.querySelectorAll('button')

    $botones.forEach(e => {
        e.style.backgroundColor = '#4CAF50'
        e.style.padding = '1rem'
        e.style.border = 'none'
        e.style.borderRadius = '10px'
    });
}