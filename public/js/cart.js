const finalPriceWrapper = document.querySelector('.final_price_wrapper');
const finalPrice = document.querySelector('.final');
const removeAllItems = document.querySelector('.remove_all_items');
var cartItem = document.querySelectorAll('.cart_item');
var cartItemPrice = document.querySelectorAll('.cart_item_price');
var priceValue = 0;
var cartCounter = sessionStorage.getItem('count');
function cartCounterShow(){
    document.querySelector('.items_in_cart').innerHTML = sessionStorage.getItem('count');
    if(document.querySelector('.items_in_cart').innerHTML == ''){
        document.querySelector('.items_in_cart').innerHTML = '0';
    }
}
function finalPriceShow(){
    cartItem = document.querySelectorAll('.cart_item');
    cartItemPrice = document.querySelectorAll('.cart_item_price');
    if (cartItem.length == 0){
        finalPriceWrapper.classList.add('none');
        document.querySelector('.cart_is_empty').classList.remove('none');
    }
    else{
        if(finalPriceWrapper.classList.contains('none')){
            finalPriceWrapper.classList.remove('none');
            document.querySelector('.cart_is_empty').classList.add('none');
        }
    }
}
function finalPriceCalc(){
    for(let i = 0; i < cartItem.length; i++){
        priceValue += parseInt(cartItemPrice[i].innerHTML);
    }
    finalPrice.innerHTML = priceValue;
    priceValue = 0;
}
function cartComplection(){
    for(let i = 0; i <= cartCounter; i++){
        let item = document.createElement('div');
        item.classList.add('cart_item');
        for(let j = 0; j < fullDbLength; j++){ 
            if(fullDb[j].id == sessionStorage.getItem(`itemsInCart[${i}]`)){
                item.innerHTML = `
                <img src= "${fullDb[j].img}" alt="">
                <div class="cart_item_name">${fullDb[j].name}</div>
                <div class="cart_item_price">${fullDb[j].real_price}</div>
            `;
            document.querySelector('.cart_is_empty').after(item);
            } 
        }
    }
    finalPriceShow();
    finalPriceCalc();
}
function deleteAll(){
    removeAllItems.addEventListener('click', () => {
        for(let i = 0; i < parseInt(sessionStorage.getItem('count')); i++){
            sessionStorage.removeItem(`itemsInCart[${i}]`);
            console.log(sessionStorage.getItem(`itemsInCart[${i}]`));
        }
        sessionStorage.setItem('count', 0);
        location.reload();
    });
}

cartCounterShow();
cartComplection();
finalPriceShow();
finalPriceCalc();
deleteAll();
console.log(sessionStorage);