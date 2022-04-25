import React from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { connect } from "react-redux";
import CartPage from "./CartPage";

const Navbar = (props) => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container">
                        <Link className="navbar-brand " to="">
                            Shopix
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        Women
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        Men
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        Kids
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        Home&Living
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        Books&More
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        <AiOutlineSearch style={{ fontSize: "25px" }} />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        <BsFillHeartFill style={{ fontSize: "25px" }} />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark

"
                                        to=""
                                    >
                                        <AiOutlineShoppingCart style={{ fontSize: "25px" }} />
                                        {props?.items?.length}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <CartPage />
        </div>
    );
};

export default connect(
    (state) => ({
        items: state.shop.cart,

    }),

    {}
)(Navbar);
