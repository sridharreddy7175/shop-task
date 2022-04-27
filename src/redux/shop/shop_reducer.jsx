import {
    ADD_QUANTITY,
    ADD_TO_CART,
    CLEAR_CART,
    PRODUCT_LIST,
    REMOVE_FROM_CART,
    SUB_QUANTITY,
} from "../shop/shop_action";

const shopReducer = (state = { products: [], cart: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(state, "state");
            const addedItem = state?.products.find(
                (item) => item.id === action.payload.id
            );
            const existItem = state?.cart.find(
                (item) => item.id === action.payload.id
            );

            // console.log("exists", exists);
            if (existItem) {
                addedItem.qty += 1;
                return {
                    ...state,
                };
            } else {
                addedItem.qty = 1;
                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                };
            }
        case ADD_QUANTITY:
            const addItem = state?.products.find(
                (item) => item.id === action.payload.id
            );
            console.log("add", addItem)
            addItem.qty += 1;
            return {
                ...state,
                cart: [...state.cart],
            };

        case SUB_QUANTITY:
            const subItem = state?.products.find(
                (item) => item.id === action.payload.id
            );
            if (subItem.qty === 1) {
                subItem.qty = undefined;
                const new_Items = state?.cart.filter(
                    (item) => item.id !== action.payload.id
                );
                return {
                    ...state,
                    cart: new_Items,
                };
            } else {
                console.log("hello")
                subItem.qty -= 1;
                return {
                    ...state,
                    cart: [...state.cart]


                };
            }

        case REMOVE_FROM_CART:
            const single_item = state?.products.find(
                (item) => item.id === action.payload.id
            );
            single_item.qty = undefined
            const new_items = state?.cart.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                cart: new_items,
            };

        case PRODUCT_LIST:
            return { ...state, products: action.payload };
        case CLEAR_CART:
            return [];

        default:
            return state;
    }
};

export default shopReducer;
