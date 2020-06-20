import React from 'react';
import { Link, Route} from 'react-router-dom';
export default function HistoryList(props) {
    
return (
    <>
    <ul>
        {console.log(props.history)}
        {props.history.map((item, index) => (
               <li key={index}><b>{item.method}</b>  {item.url}      <Link to={'history/' + index}>Details</Link>  </li>
        ))}
    </ul>
    <Route path="/history/:id">

    </Route>
    </>
);

}