const menuOpnBtn = document.getElementById('menuBtn');
const menuClsBtn = document.getElementById('menuNavCloseBtn');
const menu = document.getElementById('menu');
const menuNav = document.getElementById('menuNav');

const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


const openMenu = () => {

    body.classList.add('stopScrolling');

    menu.classList.remove('fadeOut');
    menuNav.classList.remove('menuOut');
    menu.style.display = 'block';
    menu.classList.add('fadeIn');
    menuNav.classList.add('menuIn');

    header.classList.add('blur');
    main.classList.add('blur');
    footer.classList.add('blur');

}

const closeMenu = () => {

    header.classList.remove('blur');
    main.classList.remove('blur');
    footer.classList.remove('blur');

    menu.classList.remove('fadeIn');
    menuNav.classList.remove('menuIn');
    menu.classList.add('fadeOut');
    menuNav.classList.add('menuOut');
    setTimeout(function() {
        menu.style.display = 'none';
    }, 990);

    body.classList.remove('stopScrolling');

}

menuOpnBtn.addEventListener('click', openMenu);

menuClsBtn.addEventListener('click', closeMenu);