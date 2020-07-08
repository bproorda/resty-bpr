import React from 'react';
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
