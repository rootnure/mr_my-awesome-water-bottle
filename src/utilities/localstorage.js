const cartName = "__bottle-cart";
const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem(cartName);
    return storedCartString ? JSON.parse(storedCartString) : {};
}

const saveCartToLS = cart => {
    localStorage.setItem(cartName, JSON.stringify(cart));
}

const addCartItemToLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart[id] ? cart[id]++ : cart[id] = 1;
    saveCartToLS(cart);
}

const removeItemFromLocalStorage = id => {
    const storedCart = getCartFromLocalStorage();
    delete storedCart[id];
    saveCartToLS(storedCart);
}

export {
    getCartFromLocalStorage as getCartLS,
    addCartItemToLocalStorage as setCartLS,
    removeItemFromLocalStorage as removeCartItemLS
}