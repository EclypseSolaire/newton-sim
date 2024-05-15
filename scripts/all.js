document.addEventListener('mousedown', function(event) {
    event.preventDefault();
}, false);

function showCustomMenu(x, y) {
    const menu = document.getElementById('custom-menu');
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.style.display = 'block'
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('custom-menu');
    if (!menu.contains(event.target)) {
        menu.style.display = 'none'
    }
});

document.getElementById('custom-menu').addEventListener('click', function(event) {
    const menuItem = event.target;
    if (menuItem.tagName === 'LI') {
        if (menuItem.id === 'retour') {
            window.location.href = '../index.html';
        }
        document.getElementById('custom-menu').style.display = 'none';
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    showCustomMenu(event.pageX, event.pageY);
}, false);