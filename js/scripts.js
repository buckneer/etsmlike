document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.getElementById('top_navbar');
    let navbarContainer = document.getElementById('navbar_container');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 2) {
            // Scrolled
            navbar.classList.add('bg-light');
            navbar.classList.add('navbar-light');

            navbar.classList.remove('navbar-dark');

            navbarContainer.classList.add('pt-1', 'pb-1')
            navbarContainer.classList.remove('pt-4', 'pb-4')

        } else {
            // OnTop
            navbar.classList.remove('bg-light');
            navbar.classList.remove('navbar-light');

            navbar.classList.add('navbar-dark');

            navbarContainer.classList.add('pt-4', 'pb-4');
            navbarContainer.classList.remove('pt-1', 'pb-1');


        }
    });
});