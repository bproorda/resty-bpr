import React from 'react';
import { Link, Route } from 'react-router-dom';
import Modal from '../modal';



class HistoryList extends React.Component {

    constructor() {
        super();

        this.state = {
            showContactUs: false,
        };
    }

    render() {
        const { history } = this.props;
        return (
            <>
                <ul>
                    {console.log(history)}
                    {history.map((item, index) => (
                        <li key={index}><b>{item.method}</b>  {item.url}      <Link to={'history/' + index}>Details</Link>  </li>
                    ))}
                </ul>
                <Route path="/history/:id" component={Modal}>

                </Route>
            </>
        )
    }

}
export default HistoryList;