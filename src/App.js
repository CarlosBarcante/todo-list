import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import Modal from "./components/Modal";
import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
    const [showModal, setShowModal] = useState(false);

    function onHideModal() {
        setShowModal(false);
    }

    return (
        <div className="container card">
            <Provider store={store}>
                <header><h1>Lista de Tarefas</h1><button onClick={() => { setShowModal(true) }}>+</button></header>
                <List ></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
            </Provider>
        </div>
    )

}

export default App;