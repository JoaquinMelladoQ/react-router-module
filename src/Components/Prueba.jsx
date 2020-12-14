import React, { Component } from 'react'

export default class Prueba extends Component {

    handleClick = () => {
        console.log(this.props)
    }
    render() {
        return <div onClick={this.handleClick}>'este es el componente prueba!'</div>
    }
} 