import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BiCheckbox } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";



const Header = (props) => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div className="container pl-5 pt-4 pb-4">
                <h3 className="text-white" style={{ fontFamily: "Sans-serif" }}>
                    Mcdonalds
                </h3>
                <p className="text-white" style={{ fontFamily: "Sans-serif" }}>
                    <AiFillStar /> 4.3 | 35 mins | 400 for two
                </p>
                <div style={{ fontFamily: "Sans-serif" }}>
                    <ul>
                        <li>
                            <input
                                className="form-control mt-2"
                                type="search"
                                placeholder="Search for dishes....."
                                aria-label="Search"
                            />
                        </li>
                        <li>
                            <button
                                type="button"
                                className="ml-3 btn mt-2"
                                style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                            >
                                <BiCheckbox
                                    style={{
                                        fontSize: "25px",
                                    }}
                                />{" "}
                                Veg Only
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="ml-3 btn mt-2"
                                style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                            >
                                <BsFillHeartFill
                                    style={{
                                        fontSize: "20px",
                                    }}
                                />{" "}
                                Favourite
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        items: state.shop,
    }),

    {}
)(Header);

// export default Header;
