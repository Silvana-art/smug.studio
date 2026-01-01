console.log("🎹 keyboard.js geladen");

const setImportant = (el, prop, value) => {
    if (el) el.style.setProperty(prop, value, 'important');
};


const applyTheme = () => {
    const bg = localStorage.getItem('bgColor');
    const text = localStorage.getItem('textColor') || '#EBF227';


    if (bg) setImportant(document.body, 'background-color', bg);

    document.querySelectorAll('h1, p').forEach(el => {
        setImportant(el, 'color', text);
    });

    const grid = document.querySelector('.grid');
    if (grid) {
        setImportant(grid, 'background-color', 'transparent');
        setImportant(grid, 'border', `2px solid ${text}`);
    }

    document.querySelectorAll('.cell').forEach(cell => {
        setImportant(cell, 'background-color', 'transparent');
        setImportant(cell, 'color', text);
        setImportant(cell, 'border', `1px solid ${text}`);
    });
};


document.addEventListener('DOMContentLoaded', () => {

    console.log("✅ Keyboard DOM ready");


    applyTheme();


    const links = {
        p: '../html/projects.html',
        m: '../html/me.html',
        c: '../html/contact.html'
    };

    Object.keys(links).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
            window.location.href = links[id];
        });
    });


    const specialKeys = ['c', 'm', 'p'];


    const theme = localStorage.getItem('theme') || 'default';

    specialKeys.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        if (theme === 'pinkBlue') {
            setImportant(el, 'background-color', '#0489D6');
            setImportant(el, 'color', '#F296C4');
        } else {
            setImportant(el, 'background-color', '#EBF227');
            setImportant(el, 'color', '#F296C4');
        }
    });

});


window.applyTheme = applyTheme;
