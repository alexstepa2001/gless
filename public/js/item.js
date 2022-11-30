const swiper_clients = new Swiper(".swiper-clients", {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
});
const clientsSlider = document.querySelector('.swiper-clients');
const gallery = document.querySelector('.gallery');
const colBut = document.querySelectorAll('.col_but');
const realCol = document.querySelector('.real_col');
const allDesc = document.querySelector('.all_desc');

var reCo = 1;
function clientsSliderWidth () {
    clientsSlider.style.width = `${gallery.clientWidth - 20}px`;
} 


colBut[0].addEventListener('click', () => {
    console.log(realCol.innerHTML);
    if(parseInt(realCol.innerHTML) > 1){
        reCo--;
        realCol.innerHTML = `${reCo}`;
    }
})
colBut[1].addEventListener('click', () => {
    console.log(realCol.innerHTML);
    if(parseInt(realCol.innerHTML) < 999){
        reCo++;
        realCol.innerHTML = `${reCo}`;
    }
})
allDesc.addEventListener('click', () => {
    document.querySelector('.all_description').classList.toggle('desc_active');
})



clientsSliderWidth();
window.addEventListener('resize', () => {
    clientsSliderWidth();
});