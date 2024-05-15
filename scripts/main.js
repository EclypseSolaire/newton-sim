document.getElementById('custom-menu').addEventListener('click', function(event) {
    const menuItem = event.target;
    if (menuItem.tagName === 'LI') {
        if (menuItem.id === 'gravitation') {
            window.location.href = 'secondaire.html';
        }
        document.getElementById('custom-menu').style.display = 'none';
    }
});

document.getElementById('mot-container').addEventListener('hover', function(event) {
    const menuItem = event.target;
    if (menuItem.tagName === 'LI') {
        if (menuItem.id === 'gravitation') {
            window.location.href = 'secondaire.html';
        }
        document.getElementById('custom-menu').style.display = 'none';
    }
});