console.log("Contact.js geladen!");

const setTextColor = (color) => {
    const h1 = document.querySelector('h1');
    if (h1) h1.style.color = color;

    document.querySelectorAll('p').forEach(p => p.style.color = color);
};


document.addEventListener('DOMContentLoaded', () => {
    const savedBgColor = localStorage.getItem('bgColor');
    const savedH1Color = localStorage.getItem('textColor');

    if (savedBgColor) document.body.style.backgroundColor = savedBgColor;
    if (savedH1Color) setTextColor(savedH1Color);
});




function adjustMainPosition() {
    if (window.innerWidth <= 480) {
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        if (header && main) {
            const headerHeight = header.offsetHeight;
            main.style.marginTop = headerHeight + 'px';
        }
    } else {
        const main = document.querySelector('main');
        if (main) main.style.marginTop = '0';
    }
}

window.addEventListener('load', adjustMainPosition);
window.addEventListener('resize', adjustMainPosition);
