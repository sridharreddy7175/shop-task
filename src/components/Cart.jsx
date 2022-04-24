import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/shop/shop_action";


const Cart = (props) => {

    const remove = (c) => {
        props.removeFromCart(c);
    };
    console.log("props", props);
    return (
        <div className="mt-4 mb-2 ml-5">
            <h3>Cart</h3>
            <p>
                {props?.items?.length > 0 ? (
                    <h6>{props.items.length} ITEMS</h6>
                ) : (
                    <p>No Items </p>
                )}
            </p>

            {props?.items?.map((item) => {
                return (
                    <div style={{ display: "flex" }} key={item.id} className="mb-3">
                        <h5 className="mr-4">{item.item_name}</h5>
                        <button style={{ display: "flex" }}>
                            -<h5 className="ml-4 mr-4">1</h5>+
                        </button>

                        <h5 className="ml-5">&#x20B9;{item.price}</h5>
                        <button
                            type="button"
                            className="btn btn-danger ml-2"
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
                        {props?.items?.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </span>
                </h4>
                <p>Extra charges may apply</p>
            </div>
            <div>
                <button type="button" className="btn btn-success w-50">
                    CheckOut
                </button>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        items: state.shop,
    }),

    { removeFromCart }
)(Cart);
