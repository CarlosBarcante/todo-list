import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import Item from './components/Item';
import Modal from "./components/Modal";
import './App.css';


const SAVED_ITEMS = 'savedItems';

function App() {
    const [showModal, setShowModal] = useState(false);
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (!savedItems) savedItems = [];
    const [items, setItems] = useState(savedItems);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item])
        onHideModal();
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems);
    }

    function onHideModal() {
        setShowModal(false);
    }

    return (
        <div className="container card">
            <header><h1>Todo</h1><button onClick={() => { setShowModal(true) }}>+</button></header>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )

}

export default App;