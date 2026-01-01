console.log("Script geladen!");

const setTextColor = (color) => {
    const h1 = document.querySelector('h1');
    if (h1) h1.style.color = color;

    document.querySelectorAll('p').forEach(p => p.style.color = color);
}


document.addEventListener('DOMContentLoaded', () => {
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


window.openProject = function (url) {
    const overlay = document.getElementById("overlay");
    const frame = document.getElementById("projectFrame");

    frame.src = url;


    setTimeout(() => overlay.classList.add("active"), 20);
}

window.closeProject = function () {
    const overlay = document.getElementById("overlay");
    const frame = document.getElementById("projectFrame");

    overlay.classList.remove("active");

    setTimeout(() => frame.src = "", 450);
}


document.getElementById("overlay").addEventListener("click", function (e) {
    if (e.target.id === "overlay") closeProject();
});


function setupSlider() {
    const projects = document.querySelector('.projects');
    if (!projects) return;

    let scrollAmount = 0;

    function onWheel(e) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            scrollAmount += e.deltaY * 2;
            projects.scrollLeft = scrollAmount;
        }
    }


    projects.removeEventListener('wheel', onWheel);

    if (window.innerWidth > 768) {
        projects.addEventListener('wheel', onWheel, { passive: false });
    }
}

window.addEventListener('resize', setupSlider);
setupSlider();
