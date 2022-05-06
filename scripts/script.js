const menuButton = document.getElementsByClassName('menu-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-sections')[0];

// activates mobile menu list open
menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

// close mobile menu when link is clicked
var links = navbarLinks.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    })
}
