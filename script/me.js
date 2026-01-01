console.log("Script geladen!");

document.addEventListener('DOMContentLoaded', () => {

    const setTextColor = (color) => {
        const h1 = document.querySelector('h1');
        if (h1) h1.style.color = color;

        document.querySelectorAll('p').forEach(p => p.style.color = color);
    }


    const savedBgColor = localStorage.getItem('bgColor');
    const savedH1Color = localStorage.getItem('h1Color');

    if (savedBgColor) document.body.style.backgroundColor = savedBgColor;
    if (savedH1Color) setTextColor(savedH1Color);


    const kreise = [
        { id: 'kreis1', bg: '#510273', h1: '#EBF227' },
        { id: 'kreis2', bg: '#F296C4', h1: '#0489D6' },
        { id: 'kreis3', bg: '#C2DC80', h1: '#F296C4' },
    ];

    kreise.forEach(k => {
        const elem = document.getElementById(k.id);
        if (!elem) return;

        elem.addEventListener('click', () => {
            document.body.style.backgroundColor = k.bg;
            setTextColor(k.h1);

            localStorage.setItem('bgColor', k.bg);
            localStorage.setItem('h1Color', k.h1);

            console.log(`Farbe gesetzt: BG=${k.bg}, H1/P=${k.h1}`);
        });
    });

});
