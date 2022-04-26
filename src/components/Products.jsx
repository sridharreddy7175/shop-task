import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
    addToCart,
    productList,
    addQuanity,
    subQuanity,
} from "../redux/shop/shop_action";
import Cart from "./Cart";

const Products = (props) => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        async function getProducts() {
            await setLoading(true);
            await props.productList();
            await setLoading(false);
        }
        getProducts();
    }, []);

    if (isLoading === true) {
        return <h6 className="mt-2 ml-5">Loading.........</h6>;
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <hr />

                        {props.items.length > 0 ? (
                            props?.items?.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <h5>{item.item_name}</h5>
                                        <h6>&#x20B9;{item.price}</h6>
                                        {!item?.qty ? (
                                            <button
                                                className=""
                                                onClick={() => props?.addToCart(item)}
                                            >
                                                Add to cart
                                            </button>
                                        ) : (
                                            <div
                                                style={{
                                                    float: "right",
                                                    marginTop: "-62px",
                                                    display: "flex",
                                                    backgroundColor: "white",
                                                }}
                                                className="btn "
                                            >
                                                <button
                                                    className=""
                                                    onClick={() => props?.subQuanity(item)}
                                                >
                                                    -
                                                </button>
                                                <span>{item.qty}</span>
                                                <button
                                                    className=""
                                                    onClick={() => props?.addQuanity(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        )}

                                        <hr />
                                    </div>
                                );
                            })
                        ) : (
                            <h1>No Data</h1>
                        )}
                    </div>
                    <div className="col-md-6">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        products: state.shop,
    }),
    { addToCart, productList, addQuanity, subQuanity }
)(Products);
