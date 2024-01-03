import React, { Component } from 'react';
import {useState} from 'react';

class ShowAndVanish extends Component {
    state = {
        name: '안녕하세요',
        visibility: 'visible',
    }

    vanish = (e) => {
        this.setState({
            name: '',
        })
        e.target.setState({
            visibility: 'hidden',
        })
    }

    show = (e) => {
        this.setState({
            name: '안녕하세요',
        })
        e.target.setState({
            visibility: 'visible',
        })
    }

    render() {
        return(
            <div>
                <button style={{visibility: e.target.state.visibility}}onClick={this.vanish(e)}>사라져라</button>

                <button style={{visibility: this.state.visibility}}onClick={this.show(e)}>보여라</button>

                <br/>

                {this.state.name}
            </div>
        )
    }
}

export default ShowAndVanish;

