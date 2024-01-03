import React, { Component } from 'react';
import {useState} from 'react';

class HandlerEx extends Component {
    state = {
        name: 'Hello World!'
    }


    changeWord = () => {
        this.setState({
             name: 'GoodBye World!'
    })}
    


    render() {
        return(
            <div>
                {this.state.name}
                <br/>
                <button onClick={this.changeWord}>클릭</button>
                
            </div>
        )
    }
}

export default HandlerEx;