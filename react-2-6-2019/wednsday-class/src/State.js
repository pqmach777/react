import React from 'react';

class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: "this is a text value"
        }
    }
    handleClick(){
        let d = new Date();
        this.setState({
            txt: d.toTimeString()
        })
    }

  render() {

    return (    
        <div>
            {this.state.txt}<br/>
            <button onClick={(e)=>{this.handleClick(e)}}>
            click me
            </button>
        </div>
    );
  }
}

export default State;