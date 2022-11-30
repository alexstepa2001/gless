const circle = document.querySelectorAll('.circle');
const historyInfo = document.querySelector('.history_info');
const history = new Array();
history[0] = "- Регистрация компании, начало работы. Создание компании. Заключение первых договоров с поставщиками и клиентами.";
history[1] = "- Приобретен небольшой собственный склад для хранения товаров.Регистрация на большинстве электронных торговых площадках, начало торгов в интернете. Разработка первого варианта сайта.";
history[2] = "- Приобретение первого автомобиля Mercedes Benz Sprinter для осуществления доставки, расширение штата за счет водителей. Выигран годовой конкурс на поставку уничтожителей документов для ПАО Сбербанк на всей территории РФ. <br><br>- Стали Генеральным поставщиком ПАО Сбербанк на поставку шредеров по территории РФ";
history[3] = "- Приобретение второго грузового автомобиля Mercedes Benz Sprinter, создание второго варианта сайта.  Начало розничных продаж. ";
history[4] = "- Стабильная клиентская база, продолжение развития компании. Открытие первого розничного магазина Глесс (шоурум) металлической мебели в Нижнем Новгороде.";



function historySlider(){
    historyInfo.innerHTML = history[0];
    for(let i = 0; i < circle.length; i++){
        circle[i].addEventListener('click', () => {
            for(let j = 0; j < circle.length; j++){
                circle[j].classList.remove('circle_active');
            }
            circle[i].classList.add('circle_active');
            historyInfo.innerHTML = history[i];
        })
    }
}

const swiper = new Swiper(".swiper_work", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
const workSlider = document.querySelectorAll('.work_slider');
function workSliderWidth () {
    for(let i = 0 ; i<workSlider.length; i++){
        workSlider[i].style.width = `${document.documentElement.clientWidth/2 - window.clientWidth*0.15 - 30}px`;
    }
} 

const black = document.querySelectorAll('.black');
const news = document.querySelectorAll('.new');

for(let i = 0; i < news.length; i++){
    news[i].addEventListener('mouseover', () => {
        black[i].style.visibility = "visible";
    })
    news[i].addEventListener('mouseout', () => {
        black[i].style.visibility = "hidden";
    })
}

const swiper_clients = new Swiper(".swiper-clients", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 3,
        },
        460: {
            slidesPerView: 2,
        },
        200: {
            slidesPerView: 1,
        },
    },
});
const clientsSlider = document.querySelector('.swiper-clients');
function clientsSliderWidth () {
    clientsSlider.style.width = `${document.documentElement.clientWidth - 300}px`;
} 

historySlider();
workSliderWidth();
clientsSliderWidth();
if (window.innerWidth <= 720){
    clientsSlider.style.width = `${document.documentElement.clientWidth - 200}px`;
}

window.addEventListener('resize', () => {
    workSliderWidth();
    clientsSliderWidth();
    if (window.innerWidth <= 720){
        clientsSlider.style.width = `${document.documentElement.clientWidth - 200}px`;
    }

})