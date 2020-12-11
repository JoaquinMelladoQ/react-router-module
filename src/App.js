import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Prueba from './Components/Prueba'
import Invoices from './Components/Invoices'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Prueba} />
        <Route path="/invoices" component={Invoices} />
      </div>
    );
  }
}

export default App;
