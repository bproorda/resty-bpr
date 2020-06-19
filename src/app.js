import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/';
import Results from './components/Results';


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
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Form saveData={this.getFormData} />
            <Results data={this.state.Results} />
          </Route>
          <Route>
            404
        </Route>
        </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
