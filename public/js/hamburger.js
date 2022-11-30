let burger = document.querySelector('.js-menu-toggle');
burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    if(burger.classList[3] != "is-active"){
        document.getElementsByClassName('mobile_nav')[0].style.opacity = '0';
        document.getElementsByClassName('mobile_nav')[0].style.visibility = 'hidden';
    }
    else{
        document.getElementsByClassName('mobile_nav')[0].style.opacity = '1';
        document.getElementsByClassName('mobile_nav')[0].style.visibility = 'visible';
    }
});
