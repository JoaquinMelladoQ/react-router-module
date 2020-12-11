import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Prueba from './Components/Prueba'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Prueba} />
      </div>
    );
  }
}

export default App;
