import React from 'react';
// import the react-json-view component
import ReactJson from 'react-json-view'


export default function Results(props) {



    return (
        <>
        <h2>Results: </h2>
            <span>
                <ReactJson src={ props.data} theme="monokai" />
            </span>
        </>
    )

}