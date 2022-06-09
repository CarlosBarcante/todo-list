import React from "react";

function DoneImg(props) {
    if (props.done) {
        return <img alt="done" src="./assets/on.png"></img>
    } else {
        return <img alt="undone" src="./assets/off.png"></img>
    }
}

function Listitem(props) {

    return (
        <li className={props.item.done ? 'done item card' : 'item card'}>
            {props.item.text}
            <div>
                <button onClick={() => { props.onItemDeleted(props.item) }}><img alt="delete" src="./assets/delete.png"></img></button>
                <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
            </div>
        </li>
    )
}

export default Listitem;