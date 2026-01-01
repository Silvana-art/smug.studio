console.log("Script geladen!");

document.addEventListener('DOMContentLoaded', () => {


    const setTextColor = (color) => {

        const h1 = document.querySelector('h1');
        if (h1) h1.style.color = color;

        document.querySelectorAll('p').forEach(p => p.style.color = color);


        document.querySelectorAll('li').forEach(li => li.style.color = color);
    };



    const savedBgColor = localStorage.getItem('bgColor');
    const savedTextColor = localStorage.getItem('textColor');

    if (savedBgColor) document.body.style.backgroundColor = savedBgColor;
    if (savedTextColor) setTextColor(savedTextColor);



    const kreise = [
        { id: 'kreis1', bg: '#510273', text: '#EBF227' },
        { id: 'kreis2', bg: '#F296C4', text: '#0489D6' },
        { id: 'kreis3', bg: '#C2DC80', text: '#F296C4' },
    ];

    kreise.forEach(k => {
        const elem = document.getElementById(k.id);
        if (!elem) return;

        elem.addEventListener('click', () => {


            document.body.style.backgroundColor = k.bg;
            setTextColor(k.text);


            localStorage.setItem('bgColor', k.bg);
            localStorage.setItem('textColor', k.text);


            if (window.applyTheme) window.applyTheme();

            console.log(`Theme gesetzt: BG=${k.bg}, TEXT=${k.text}`);
        });

    });
});
