const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    return storedCartString ? JSON.parse(storedCartString) : {};
}

const saveCartToLS = cart => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const addCartItemToLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart[id] ? cart[id]++ : cart[id] = 1;
    saveCartToLS(cart);
}

export {
    getCartFromLocalStorage as getCartLS,
    addCartItemToLocalStorage as setCartLS
}