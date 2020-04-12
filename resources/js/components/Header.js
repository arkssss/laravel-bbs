import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {


  constructor(props) {
    super(props);



  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top">
      </nav>
  );
  }
}

if (document.getElementById('header')) {
  ReactDOM.render(<Header />, document.getElementById('header'));
}
