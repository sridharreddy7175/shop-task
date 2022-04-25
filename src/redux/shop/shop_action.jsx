import Axios from "axios";

//Action
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";
export const PRODUCT_LIST = "PRODUCT_LIST";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY"

export function productList() {
    return async (dispatch) => {
        const data = await Axios.get(
            "https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7"
        );
        dispatch({
            type: PRODUCT_LIST,
            payload: data?.data,
        });
    };
}

export const addQuanity = (product) => {
    return {
        type: ADD_QUANTITY,
        payload: product,
    };
}
export const subQuanity = (product) => {
    return {
        type: SUB_QUANTITY,
        payload: product,
    };
}

export const addToCart = (product) => {
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



export const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};
