import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../store/actions/ListActions";

function DoneImg(props) {
    if (props.done) {
        return <img alt="done" src="./assets/on.png"></img>
    } else {
        return <img alt="undone" src="./assets/off.png"></img>
    }
}

function Listitem(props) {
    const dispatch = useDispatch();
    return (
        <li className={props.item.done ? 'done item card' : 'item card'}>
            {props.item.text}
            <div>
                <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><img alt="delete" src="./assets/delete.png"></img></button>
                <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done}></DoneImg></button>
            </div>
        </li>
    )
}

export default Listitem;