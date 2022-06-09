import React, { useState } from "react";

function TodoForm(props) {
    const [text, setText] = useState('');

    function inputChange(event) {
        let text = event.target.value;
        setText(text);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText('');
        }
    }

    return (
        <form>
            <input onChange={inputChange} type='text' value={text}></input>
            <button onClick={addItem}>Adicionar</button>
        </form>
    )
}

export default TodoForm;