const menuButton = document.getElementsByClassName('menu-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-sections')[0];

menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})
