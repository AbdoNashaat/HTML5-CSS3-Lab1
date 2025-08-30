window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const stickyNav = document.querySelector('.sticky-nav');
    const navbarHeight = navbar.offsetHeight;

    // Check if the user has scrolled past the navbar's height
    if (window.scrollY > navbarHeight) {
        console.log('12')
        stickyNav.classList.add('sticky');
        console.log(stickyNav)
    } else {
        console.log('777')
        stickyNav.classList.remove('sticky');
    }
});

const sectionIDs = {
    0 : 'about',
    1 : 'skills',
    2 : 'projects',
    3 : 'contact',
    4 : 'home' 
};

const anchors = Array.from(document.getElementsByClassName('links'));

anchors.forEach( anchor => {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const sectionSelected = document.getElementById((anchor.textContent).toLowerCase());
        console.log(sectionSelected)
        sectionSelected.scrollIntoView({ behavior: 'smooth' });
    })
})