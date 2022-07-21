import React from "react";
import Listitem from "./Listitem";
import { useSelector } from "react-redux";

function List() {
    const items = useSelector(state => state);
    return (
        <ul>
            {items.map(item =>
                <Listitem key={item.id} item={item}></Listitem>
            )}
        </ul >
    )
}

export default List;