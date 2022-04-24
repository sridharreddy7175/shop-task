import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/shop/shop_action";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
    const [items, setItems] = useState([]);
    const [inCart, setInCart] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [count, setCount] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setInCart(props?.products?.find((item) => item.id === items.id));
    }, [props?.products]);

    const getProducts = async () => {
        setLoading(true);
        try {
            var resProducts = await fetch(
                "https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7"
            );
            var response = await resProducts.json();
            setLoading(false);
            setItems(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (isLoading === true) {
        return <h6 className="mt-2 ml-5">Loading.........</h6>;
    }

    const Add = (item) => {
        props.addToCart(item);
        navigate("/cart");
    };
    const decrement = (id) => {
        console.log("id", id);
        count === 1 ? <div>{count}</div> : <h1>{setCount(count - 1)}</h1>;
    };
    // const increment = (id) => {
    //     setCount(count + 1);
    // };

    const increment = (id) => {
        console.log("id", id);
        let itemIndex = items.findIndex((item) => {
            console.log("item", item.id);
            return item.id === id ? setCount(count + 1) : setCount(count + 1);
        });
        setCount(itemIndex);
        // if (itemIndex) {
        //     setCount(count + 1)

        // }
        // else {
        //     setCount(count)

        // }
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <hr />

                        {items.map((item) => {
                            const id = item?.id;
                            return (
                                <div key={item.id}>
                                    <h5>{item.item_name}</h5>
                                    <h6>&#x20B9;{item.price}</h6>

                                    <div
                                        style={{
                                            float: "right",
                                            marginTop: "-62px",
                                            display: "flex",
                                            backgroundColor: "white",
                                        }}
                                        className="btn "
                                    >
                                        <button onClick={() => decrement(id)}>-</button>{" "}
                                        <h5 className="ml-2 mr-2">{count}</h5>
                                        <button onClick={() => increment(id)}>+</button>
                                    </div>
                                    {inCart ? (
                                        <button className="btn btn-dark">Edit</button>
                                    ) : (
                                        <button className="btn btn-dark" onClick={() => Add(item)}>
                                            AddToCart
                                        </button>
                                    )}

                                    <hr />
                                </div>
                            );
                        })}
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
        // details: state.shop,
        products: state.shop,
    }),

    { addToCart }
)(Products);
