document.addEventListener('mousedown', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.location.href = 'pages/chargement.html';
    }
});

window.onload = function() {
    setTimeout(function () {
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        }, false);
        document.getElementById('rc-box').style.display = 'none';
    }, 0);
    setInterval(changeContentAndReloadAnimation, 2000);
    setTimeout(function() {
        document.getElementById('typing-sub').innerHTML = '<span>Appuyez sur [ENTRÉE]</span>';
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            showCustomMenu(event.pageX, event.pageY);
        }, false);
        document.getElementById('rc-box').style.display = 'block';
    }, 12000);
};

const element = document.getElementById('typing-text');
const contents = ["Bienvenue", "sur", "Newton", "Simulator", "!"];
let currentIndex = 0;

function changeContentAndReloadAnimation() {
    element.innerHTML = `<h1>${contents[currentIndex]}</h1>`;
    currentIndex = (currentIndex + 1) % contents.length;

    element.classList.remove('typing-text-anim');
    void element.offsetWidth;
    element.classList.add('typing-text-anim');
}

