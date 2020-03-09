import React from 'react';
import './App.css';
import Child from './Child'

export default class App extends React.Component {
  render() {
    return (
    <React.Fragment>
      <h1>Hello React</h1>
      <Child />
    </React.Fragment>)
  }
}


