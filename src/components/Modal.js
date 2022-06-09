import React from "react";

function Modal(props) {
    function hideModal(event) {
        let target = event.target;
        if (target.className === 'modal') {
            props.onHideModal();
        }

    }

    return (
        <div onClick={hideModal} className={props.show ? 'modal' : 'modal hide'}>
            <div className="card">
                {props.children}
            </div>
        </div>
    )
}

export default Modal;