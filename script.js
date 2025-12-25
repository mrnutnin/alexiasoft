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

// Portfolio Swiper
const portfolioSwiper = new Swiper('.portfolioSwiper', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        // Mobile
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // Tablet
        601: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        // Desktop
        951: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    on: {
        init: function() {
            console.log('Portfolio Swiper initialized');
        },
    },
});

