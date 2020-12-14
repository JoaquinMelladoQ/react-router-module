import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Prueba from './Components/Prueba'
import Invoices from './Components/Invoices'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Prueba} />
        <Route exact path="/invoices" component={Invoices} />
      </div>
    );
  }
}

export default App;
