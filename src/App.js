// create your App component here
import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {

      });
  }

  render() {
    return (
      < h1 > Hi</h1 >
    )
  }
}
