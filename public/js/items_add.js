let addButton = document.querySelectorAll('.buy_button');
let productId = document.querySelectorAll('.product_id');
let inCart = document.querySelector('.in_cart');
let itemId = document.querySelector('.item_id');
let itemsId = document.querySelectorAll('.item_id');
let realCo = document.querySelector('.real_col');
let cartSh = document.querySelectorAll('.cart_sh');
let toCartSale = document.querySelectorAll('#to_cart_sale');
let saleId = document.querySelectorAll('.sale_id');
function addToCart(){
    if(addButton){
        for(let i = 0; i < addButton.length; i++){
            addButton[i].addEventListener('click', () => {
                cartCounter++;
                sessionStorage.setItem('count', cartCounter);
                sessionStorage.setItem(`itemsInCart[${sessionStorage.getItem('count') - 1}]`, parseInt(productId[i].innerHTML));
                location.reload();
                
            })
        }
    }
    if(inCart){
        inCart.addEventListener('click', () => {
            for(let i = 0; i < parseInt(realCo.innerHTML); i++){
                cartCounter++;
                sessionStorage.setItem('count', cartCounter);
                sessionStorage.setItem(`itemsInCart[${sessionStorage.getItem('count') - 1}]`, parseInt(itemId.innerHTML));
                location.reload();
            }
        })
    }
    if(cartSh){
        for(let i = 0; i < cartSh.length; i++){
            cartSh[i].addEventListener('click', () => {
                cartCounter++;
                sessionStorage.setItem('count', cartCounter);
                sessionStorage.setItem(`itemsInCart[${sessionStorage.getItem('count') - 1}]`, parseInt(itemsId[i].innerHTML));
                location.reload();
            })
        }
    }
    if(toCartSale){
        for(let i = 0; i < toCartSale.length; i++){
            toCartSale[i].addEventListener('click', () => {
                cartCounter++;
                sessionStorage.setItem('count', cartCounter);
                sessionStorage.setItem(`itemsInCart[${sessionStorage.getItem('count') - 1}]`, parseInt(saleId[i].innerHTML));
                location.reload();
            })
        }
    }
}

addToCart();