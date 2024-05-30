// ================== toggle icon navbar ==================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log("clicked");
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ================== scroll section active link ==================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offsetTop = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });

    // ================== sticky navbar ==================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    // ================== remove toggle icon and navbar when click navbar link (scroll) ==================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ================== scroll reveal ==================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-contact, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// ================== typed js ==================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Freelancer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
