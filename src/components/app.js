import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './app.scss';
import Header from './header';
import Footer from './footer';
import Form from './form';
import Results from './Results';
import History from './history';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
      Results: {},
      History: JSON.parse(window.localStorage.getItem('history')) || [],
    };
  }

  getFormData = data => {
    this.setState({ Results: data });
    console.log(this.state.Results);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form saveData={this.getFormData} />
            <Results data={this.state.Results} />
          </Route>
          <Route>
            <History history = {this.state.History}/>
          </Route>
          <Route>
            404
        </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
