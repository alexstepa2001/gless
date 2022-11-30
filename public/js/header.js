const shoppingList = document.querySelector('.shopping_list');
const list = document.querySelector('.list');
shoppingList.addEventListener('click', () => {
    list.classList.toggle('active');
})