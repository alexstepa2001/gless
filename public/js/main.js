const salesSlider = document.querySelector('.big_sales_slider_wrapper');
var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper_categories = new Swiper(".swiper-category", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        1100: {
            slidesPerView: 4,
        },
        630: {
            slidesPerView: 3,
        },
        460: {
            slidesPerView: 2,
        },
    },
});
var swiper_clients = new Swiper(".swiper-clients", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        630: {
            slidesPerView: 3,
        },
        460: {
            slidesPerView: 2,
        },
    },
});
var swiper_news = new Swiper(".swiper-news", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        1620: {
            slidesPerView: 5,
        },
        1380: {
            slidesPerView: 4,
        },
        630: {
            slidesPerView: 3,
        },
        460: {
            slidesPerView: 2,
        },
    },
});
const newsSlider = document.querySelector('.swiper-news');
const clientsSlider = document.querySelector('.swiper-clients');
const categorySlider = document.querySelector('.categories_slider_wrapper');
const swiper_sales = new Swiper(".swiper-sales", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        1620: {
            slidesPerView: 5,
        },
        1240: {
            slidesPerView: 4,
        },
        950: {
            spaceBetween: 80,
        },
        630: {
            slidesPerView: 3,
        },
        460: {
            slidesPerView: 2,
        },
    },
});
const salesPoster = document.querySelector('.sales_poster');
const man = document.querySelector('.man');

function clientsSliderWidth () {
    clientsSlider.style.width = `${document.documentElement.clientWidth - 240}px`;
} 
function categorySliderWidth () {
    categorySlider.style.width = `${document.documentElement.clientWidth - 80}px`;
} 
function salesSliderWidth () {
    salesSlider.style.width = `${document.documentElement.clientWidth - 80}px`;
}
function newsSliderWidth () {
    newsSlider.style.width = `${document.documentElement.clientWidth - 120}px`;
}

salesPoster.addEventListener('mouseover', () => {
    man.style.height = '110%';
    man.style.right = '30px';
});
salesPoster.addEventListener('mouseout', () => {
    man.style.height = '100%';
    man.style.right = '40px';
});

function checkMediaQuery() {
    categorySliderWidth();
    salesSliderWidth();
    clientsSliderWidth();
    newsSliderWidth();
    if (window.innerWidth <= 720){
        document.querySelector('.sales_slider_wrapper').style.width = `${document.documentElement.clientWidth - 40}px`;
        clientsSlider.style.width = `${document.documentElement.clientWidth - 180}px`;
        categorySlider.style.width = `${document.documentElement.clientWidth - 40}px`;
        salesSlider.style.width = `${document.documentElement.clientWidth - 40}px`;
        newsSlider.style.width = `${document.documentElement.clientWidth - 100}px`;
    }
    else if (window.innerWidth <= 1100) {
        document.querySelector('.sales_slider_wrapper').style.width = `${document.documentElement.clientWidth - 80}px`;
    }
    else{
        document.querySelector('.sales_slider_wrapper').style.width = null;
    }
}


checkMediaQuery();
window.addEventListener('resize', () => {
    checkMediaQuery();
});
