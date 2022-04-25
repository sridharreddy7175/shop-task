import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/shop/shop_action";

const Cart = (props) => {
    const navigate = useNavigate();

    const remove = (c) => {
        props.removeFromCart(c);
    };

    return (
        <div className="mt-4 mb-2 ml-5">
            <h3>Cart</h3>
            <>
                {props?.items?.length > 0 ? (
                    <h6>{props.items.length} ITEMS</h6>
                ) : (
                    <p>No Items </p>
                )}
            </>

            {props?.items?.map((item) => {
                return (
                    <div style={{ display: "flex" }} key={item?.id} className="mb-3 ">
                        <p className="dot mr-1"></p>
                        <h5 className="mr-4">{item?.item_name?.substring(0, 15)}</h5>


                        <h5 className="ml-5">&#x20B9;{item?.price}</h5>
                        <button
                            type="button"
                            className="btn btn-danger ml-5 mt-1"
                            onClick={() => remove(item)}
                        >
                            X
                        </button>

                    </div>
                );
            })}
            <br />

            <div className="mt-5">
                <h4>
                    Subtotal{" "}
                    <span className="ml-5">
                        &#x20B9;
                        {props.items
                            .reduce((sum, item) => sum + item.price * item.qty, 0)
                            .toFixed(2)}
                    </span>
                </h4>
                <p>Extra charges may apply</p>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => navigate("/cart")}
                    className="btn btn-success w-50"
                >
                    CheckOut
                </button>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        items: state.shop.cart,
    }),

    { removeFromCart }
)(Cart);
