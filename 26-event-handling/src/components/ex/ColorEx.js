import React, { Component } from 'react';
import {useState} from 'react';

class ColorEx extends Component {
    state = {
        name: '검정색 글씨',
        color: 'black',
    }

    changeRed = () => {
        this.setState({
            name: '빨간색 글씨',
            color: 'red',
        })
    }

    changeBlue = () => {
        this.setState({
            name: '파란색 글씨',
            color: 'blue',
        })
    }

    render() {
        return(
            <div>
                <span style={{color: this.state.color}}>{this.state.name}</span>
                <br />
                <button onClick={this.changeRed}>빨간색</button>
                <button onClick={this.changeBlue}>파란색</button>
            </div>
        )
    }
}

export default ColorEx;