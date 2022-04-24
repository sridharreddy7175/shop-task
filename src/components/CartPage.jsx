import React, { useState } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, clearCart } from "../redux/shop/shop_action";

const CartPage = (props) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState("");
    const remove = (c) => {
        props.removeFromCart(c);
        navigate("/");
    };

    const calDiscount = (val) => {
        let amount1 = ""
        let amount2 = ""

        switch (val) {
            case "bar":
                return "bar";
            default:
                return "foo";
        }
    };

    const loadAllProducts = () => {
        return (
            <div>
                {props?.items?.length > 0 ? (
                    <>
                        <table className="table table-striped table-dark">
                            <thead className="">
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.items?.map((c) => {
                                    return (
                                        <tr>
                                            <td>{c.item_name}</td>
                                            <td>Black</td>
                                            <td>M</td>
                                            <td>&#x20b9; {qty !== "" ? qty * c.price : c.price}</td>
                                            <td>
                                                <select
                                                    onChange={(e) => setQty(e.target.value)}
                                                    value={qty}
                                                    className="form-control"
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </td>

                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger ml-2"
                                                    onClick={() => remove(c)}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <>
                        <h6>
                            <b className="pb-2">No CartItem </b>
                            <br />
                            <br />
                            <Link to="/">Continue shopping</Link>
                        </h6>
                    </>
                )}
            </div>
        );
    };
    const loadCheckout = () => {
        return (
            <div className="mt-2" style={{ backgroundColor: "lightblue" }}>
                {props?.items?.length > 0 && (
                    <div className="p-2">
                        <h4>Summary</h4>
                        <hr />
                        <h6>
                            Amount: &#x20B9;
                            {qty !== ""
                                ? props?.items
                                    .reduce((sum, item) => sum + item.price * qty, 0)
                                    .toFixed(2)
                                : props?.items
                                    .reduce((sum, item) => sum + item.price, 0)
                                    .toFixed(2)}
                        </h6>
                        <h6 className="mt-2">DisCount:-</h6>
                        <hr />
                        <h4>Total:-</h4>
                        <hr />


                    </div>
                )}
            </div>
        );
    };

    const clear = () => {
        console.log("hello");
        props.clearCart();
        navigate("/");
    };
    return (
        <div className="container mt-3 mb-2">
            <div className="row">
                <div className="col-md-6">
                    <h5>
                        <BsFillBagCheckFill /> Items in your cart
                    </h5>
                </div>
                <div className="col-md-6 text-right" style={{ cursor: "pointer" }}>
                    <button onClick={clear}> X</button>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-8 pt-2">{loadAllProducts()}</div>
                    <div className="col-md-4">{loadCheckout()}</div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        items: state.shop,
    }),

    { removeFromCart, clearCart }
)(CartPage);
