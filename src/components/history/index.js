import React from 'react';

export default function HistoryList(props) {
    
return (
    <>
    <ul>
        {props.history.map((item) => (
            <span>
               <p><b>{item.method}</b>  {item.url}</p>
            </span>
        ))}
    </ul>
    </>
);

}