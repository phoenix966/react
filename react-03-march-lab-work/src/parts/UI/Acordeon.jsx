import React, { Component } from 'react'

export default class Acordeon extends Component {
    state={
        closed: true
    }
    render() {
        return (
            <>
             {this.props.children}   
            </>
        )
    }
}
