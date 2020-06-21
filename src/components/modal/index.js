import React from 'react';
import './modal.scss';
import ReactJson from 'react-json-view'

const Modal = props => {
    let thisEntry = props.location.state.entry;
    let thisId = props.match.params.id;
    return (
        <>
            <h2>Results for Request #{thisId} </h2>
            <span>
                <ReactJson src={thisEntry} theme="monokai" />
            </span>
            <button >Click here to close</button>
        </>


    )

}

export default Modal;
