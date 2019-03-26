'use strict';

const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('data-action "ADD_TO_CART"]');

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const produtDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector('.product_image').getAttribute('src'),
            image: productDOM.querySelector('.product_name').innerText,
            price: productDOM.querySelector('.product_price').innerText,
        };
        cartDOM.insertAdjacentElement('beforeend')
    });
});