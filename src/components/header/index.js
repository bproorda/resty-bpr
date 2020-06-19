import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './nav';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>RESTy</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
