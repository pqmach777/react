import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: "this is a sample message",
            counter: 0
        }
    }
    handleEvent(){
        let d = new Date();
        let newCount = this.state.counter +1;
        this.setState({
            msg: d.toTimeString(),
            counter: newCount
        })
    }
  render() {
    return (
        <div>
            {this.state.msg}; {this.state.counter}
            <button onClick={()=>{this.handleEvent()}}>Submity</button>
        </div>
    );
  }
}
Test.propTypes = {
  
}
export default Test;
