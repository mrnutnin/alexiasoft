// Lang Switcher with Animation
function setLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const content = document.getElementById('main-content');
    content.classList.add('content-hidden');

    setTimeout(() => {
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.th;
        });
        content.classList.remove('content-hidden');
    }, 350);
}

// Nav Scroll Spy
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        if (pageYOffset >= section.offsetTop - 150) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-menu a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) a.classList.add('active');
    });
});

// Portfolio Slider
let currentSlide = 0;
const itemsPerSlide = 4;
const totalItems = 18;
const maxSlides = Math.ceil(totalItems / itemsPerSlide);

function initPortfolioSlider() {
    const dotsContainer = document.getElementById('portfolioDots');
    for (let i = 0; i < maxSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
    updateSlider();
}

function portfolioSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= maxSlides) currentSlide = maxSlides - 1;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    const grid = document.getElementById('portfolioGrid');
    const offset = -(currentSlide * 20);
    grid.style.transform = `translateX(${offset}%)`;

    // Update dots
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    // Update nav buttons
    document.querySelector('.slider-nav.prev').classList.toggle('disabled', currentSlide === 0);
    document.querySelector('.slider-nav.next').classList.toggle('disabled', currentSlide === maxSlides - 1);
}

// Initialize slider on page load
window.addEventListener('load', initPortfolioSlider);
