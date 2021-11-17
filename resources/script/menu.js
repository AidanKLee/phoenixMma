const menuOpnBtn = document.getElementById('menuBtn');
const menuClsBtn = document.getElementById('menuNavCloseBtn');
const menu = document.getElementById('menu');
const menuNav = document.getElementById('menuNav');

const openMenu = () => {

    menu.classList.remove('fadeOut');
    menuNav.classList.remove('menuOut');
    menu.style.display = 'block';
    menu.classList.add('fadeIn');
    menuNav.classList.add('menuIn');

}

const closeMenu = () => {

    menu.classList.remove('fadeIn');
    menuNav.classList.remove('menuIn');
    menu.classList.add('fadeOut');
    menuNav.classList.add('menuOut');
    setTimeout(function() {
        menu.style.display = 'none';
}, 990);

}

menuOpnBtn.addEventListener('click', openMenu);

menuClsBtn.addEventListener('click', closeMenu);