// script.js

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
// script.js

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
// script.js

const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Voltar ao Topo';
backToTopButton.classList.add('back-to-top');

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
