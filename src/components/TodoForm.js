import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions/ListActions";

function TodoForm(props) {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function inputChange(event) {
        let text = event.target.value;
        setText(text);
    }

    function addItemEvent(event) {
        event.preventDefault();
        if (text) {
            dispatch(addItem(text));
            setText('');
            props.onHideModal();
        }
    }

    return (
        <form>
            <input onChange={inputChange} type='text' value={text}></input>
            <button onClick={addItemEvent}>Adicionar</button>
        </form>
    )
}

export default TodoForm;