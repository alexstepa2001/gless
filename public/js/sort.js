const sort = document.querySelector('.sort_button');
const sortMenu = document.querySelector('.sort_menu');
sort.addEventListener('click', () => {
    sortMenu.classList.toggle('active');
})
const priceDown = document.querySelector('.price_down');
priceDown.addEventListener('click', () => {
    priceDownSort();

})
const priceUp = document.querySelector('.price_up');
priceUp.addEventListener('click', () => {
    console.log('nothehe');
    priceUpSort();

})
const popular = document.querySelector('.popular');
popular.addEventListener('click', () => {
    popularSort();

})

let product = document.querySelectorAll('.items_item');
let productArr = new Array();
for(let i = 0; i < product.length; i++){
    productArr[i] = {
        pr: document.querySelectorAll('.items_item')[i],
        name:  product[i].querySelector('.item_name').innerHTML,
        price: parseInt(product[i].querySelector('.real_price').innerHTML),
        priority: parseInt(product.length - i),
        ord: i
    };
}

function priceDownSort(){
    for(let i = 0; i < productArr.length; i++){
        for(let j = 0; j < productArr.length; j++){
            if(productArr[i].price > productArr[j].price)
            {
                let pr_perem = productArr[i];
                productArr[i] = productArr[j];
                productArr[j] = pr_perem;
            }
        }
    }
    for(let i = 0; i < productArr.length; i++){
        productArr[i].pr.style.order = i; 
    }
}

function priceUpSort(){
    for(let i = 0; i < productArr.length; i++){
        for(let j = 0; j < productArr.length; j++){
            if(productArr[i].price < productArr[j].price)
            {
                let pr_perem = productArr[i];
                productArr[i] = productArr[j];
                productArr[j] = pr_perem;
            }
        }
    }
    for(let i = 0; i < productArr.length; i++){
        productArr[i].pr.style.order = i;
    }
}

function popularSort(){
    for(let i = 0; i < productArr.length; i++){
        for(let j = 0; j < productArr.length; j++){
            if(productArr[i].ord < productArr[j].ord)
            {
                let pr_perem = productArr[i];
                productArr[i] = productArr[j];
                productArr[j] = pr_perem;
            }
        }
    }
    for(let i = 0; i < productArr.length; i++){
        productArr[i].pr.style.order = i;
    }
}