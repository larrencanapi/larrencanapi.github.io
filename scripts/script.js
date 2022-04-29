const menuButton = document.getElementsByClassName('menu-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-sections')[0];

menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

var links = navbarLinks.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    })
}
