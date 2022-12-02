window.addEventListener('DOMContentLoaded', () => {
    // Links
    const links = document.querySelectorAll('.socials__link');

    links.forEach(el => {
        el.addEventListener('click', (e) => {
            if (el.classList.contains('disabled')) {
                e.preventDefault();
            }
        })
    })

    // Form
    const form = document.querySelector('.form');
    const warning = document.querySelector('.socials__warning');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        links.forEach(el => {
            el.classList.remove('disabled');
        })
        warning.remove();
    })

    // Animation
    const body = document.querySelector('body');
    const images = document.querySelector('.images');

    images.addEventListener('mouseenter', () => {
        body.classList.add('active')
    })

    images.addEventListener('mouseleave', () => {
        body.classList.remove('active')
    })
});
