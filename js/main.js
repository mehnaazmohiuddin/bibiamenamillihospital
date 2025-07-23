


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('shrink');

    } else {
        header.classList.remove('shrink');
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message. We will get back to you soon!');
        this.reset();
    });
}

// Mobile menu toggle (for responsive design)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger menu button
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-toggle');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add button to navbar
    navbar.insertBefore(menuButton, navLinks);
    
    // Toggle menu on click
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
};

// Initialize mobile menu
createMobileMenu(); 

// Dropdown menu toggle for 'Our Doctors'
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.closest('.dropdown');
        const expanded = this.getAttribute('aria-expanded') === 'true';
        // Close all other dropdowns
        document.querySelectorAll('.dropdown').forEach(drop => {
            if (drop !== parent) {
                drop.classList.remove('open');
                drop.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
            }
        });
        parent.classList.toggle('open');
        this.setAttribute('aria-expanded', !expanded);
    });
});
// Close dropdown on outside click
window.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(drop => {
        if (!drop.contains(e.target)) {
            drop.classList.remove('open');
            const toggle = drop.querySelector('.dropdown-toggle');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });
}); 

// Initialize Swiper
var mySwiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,              // Set to true to enable continuous loop mode

    // Autoplay configuration
    autoplay: {
        delay: 3000,             // Time between slide transitions in milliseconds (3 seconds)
        disableOnInteraction: false, // Set to false to continue autoplay after user interaction
    },

    // Speed of the slide transition in ms
    speed: 800,

    // If you need pagination (dots at the bottom)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make dots clickable to jump to slides
    },

    // If you need navigation buttons (arrows)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar (optional)
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    */

    // Breakpoints for responsive design (optional, but good practice)
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    }
});