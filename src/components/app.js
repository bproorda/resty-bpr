import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './header';
import Footer from './footer';
import Form from './form';
import Results from './Results';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
      Results: {},
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
            404
        </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
