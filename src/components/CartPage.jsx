import React, { useEffect } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    removeFromCart,
    addQuanity,
    subQuanity,
} from "../redux/shop/shop_action";

const CartPage = (props) => {
    const navigate = useNavigate();

    let amount = 0;


    useEffect(() => {
        if (props?.items.length === 0) {
            navigate("/");

        }
    }, [props?.items])


    const remove = (c) => {
        props.removeFromCart(c);

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
                                    amount = amount + c.price;
                                    return (
                                        <tr>
                                            <td>{c.item_name}</td>
                                            <td>Black</td>
                                            <td>M</td>
                                            <td>&#x20b9; {c.price * c.qty}</td>
                                            <td>
                                                <button
                                                    className=""
                                                    onClick={() => props?.subQuanity(c)}
                                                >
                                                    -
                                                </button>
                                                <span className="fw-bolder">{c.qty}</span>
                                                <button
                                                    className=""
                                                    onClick={() => props?.addQuanity(c)}
                                                >
                                                    +
                                                </button>
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
        let totalOrderValue = parseFloat(0);
        let totalDiscuontPercent = parseFloat(0);
        let grandTotalAfterDiscount = parseFloat(0);
        if (props.items?.length) {
            const orderList = props.items;

            totalOrderValue = orderList.reduce(function (accumulator, item) {
                return accumulator + item.price * item.qty;
            }, 0);

            if (
                parseFloat(totalOrderValue) > 100 &&
                parseFloat(totalOrderValue) <= 500
            )
                totalDiscuontPercent = parseFloat(10);
            if (parseFloat(totalOrderValue) > 500)
                totalDiscuontPercent = parseFloat(20);
        }
        if (parseFloat(totalDiscuontPercent) !== 0) {
            let intialValue = parseFloat(0);
            intialValue =
                parseFloat(totalOrderValue) / parseFloat(totalDiscuontPercent);
            grandTotalAfterDiscount =
                parseFloat(totalOrderValue) - parseFloat(intialValue);
        } else grandTotalAfterDiscount = parseFloat(totalOrderValue);
        console.log("totalOrder", totalOrderValue);
        console.log("discount per", totalDiscuontPercent);
        console.log("grand total", grandTotalAfterDiscount);

        return (
            <div className="mt-2" style={{ backgroundColor: "lightblue" }}>
                {props?.items?.length > 0 && (
                    <div className="p-2">
                        <h4>Summary</h4>
                        <hr />
                        <h6>
                            Amount: &#x20B9;
                            {props?.items
                                .reduce((sum, item) => sum + item.price * item.qty, 0)
                                .toFixed(2)}
                        </h6>
                        <hr />
                        <h6 className="mt-2">DisCount:- {totalDiscuontPercent} %</h6>
                        <hr />
                        <h4>Total:- &#x20B9; {grandTotalAfterDiscount}</h4>
                        <hr />
                    </div>
                )}
            </div>
        );
    };


    return (
        <div className="container mt-3 mb-2">

            <h5>
                <BsFillBagCheckFill /> Items in your cart
            </h5>

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
        items: state.shop.cart,
    }),

    { removeFromCart, addQuanity, subQuanity }
)(CartPage);
