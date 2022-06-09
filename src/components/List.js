import React from "react";
import Listitem from "./Listitem";

function List(props) {

    return (
        <ul>
            {props.items.map(item =>
                <Listitem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></Listitem>
            )}
        </ul >
    )
}

export default List;