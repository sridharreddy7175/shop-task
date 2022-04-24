//Action
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_PRODUCT";
export const CLEAR_CART = "CLEAR_CART"
export const INCREMENT = 'INCREMENT'

export const addToCart = (product) => {
    console.log("product", product);
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product,
    };
};

export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: id
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
