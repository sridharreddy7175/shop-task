import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,

} from "../shop/shop_action";

const cart = [];
const shopReducer = (state = cart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const exists = state.find((item) => item.id === action.payload.id);
            if (exists) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? {
                            ...item,
                            qty: item.qty + 1,
                            price: item.price * (item.qty + 1),
                        }
                        : item
                );
            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        qty: 1,
                        price: action.payload.price,
                    },
                ];
            }
        case REMOVE_FROM_CART:
            if (state.find((item) => item.id === action.payload.id)) {
                return state.filter((item) => item.id !== action.payload.id);
            }
        case CLEAR_CART:
            return []


        default:
            return state;
    }
};

export default shopReducer;
