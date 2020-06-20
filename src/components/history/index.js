import React from 'react';
import { Link, Route } from 'react-router-dom';
import Modal from '../modal';
import { If } from '../If';



class HistoryList extends React.Component {

    constructor() {
        super();

        this.state = {
            showDetails: false,
        };
    }

    toggleDetailModal = () => {
        this.setState(oldState => ({ showDetails: !oldState.showDetails }));
      }

    render() {
        const {showDetails} = this.state;
        const { history } = this.props;
        return (
            <>
                <ul>
                    {console.log(history)}
                    {history.map((item, index) => (
                        <li key={index}><b>{item.method}</b>  {item.url}      <Link to={'history/' + index}>Details</Link>  </li>
                    ))}
                </ul>

                <If condition={showDetails}>
          <Modal title="Contact Us" onClose={this.toggleContactUsModal}>
            Google me, dummy
          </Modal>
        </If>

                <Route path="/history/:id" component={Modal}>

                </Route>
            </>
        )
    }

}
export default HistoryList;