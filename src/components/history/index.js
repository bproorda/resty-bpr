import React from 'react';

export default function HistoryList(props) {
    
return (
    <>
    <ul>
        {console.log(props.history)}
        {props.history.map((item, index) => (
               <li key={index}><b>{item.method}</b>  {item.url}</li>
        ))}
    </ul>
    </>
);

}