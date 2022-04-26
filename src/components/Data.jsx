import React, { useState, useEffect } from "react";
import Axios from "axios";

function SeachData() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const filternames = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.address.city.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />

            {filternames.length > 0 ? (
                filternames.map((user) => {
                    return (
                        <div>
                            {user.name}
                            {user.address.city}
                        </div>
                    );
                })
            ) : (
                <h1>dello</h1>
            )}
        </div>
    );
}
export default SeachData;
