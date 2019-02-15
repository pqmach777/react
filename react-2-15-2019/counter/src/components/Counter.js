import React from 'react';
import { connect } from 'react-redux'
import counterAction from '../actions/counterAction'

counterAction()
class Counter extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        return (
           <div>
               <span>{this.props.currentCountInStore}</span>
               <button onClick={this.props.onIncreaseClick}>Increase</button>
           </div> 
        );
    }
}


function mapDispatchToProps(dispatch){
    
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

function mapStateToProps(state){
    return {
        currentCountInStore: state.count 
    }
}

export default connect(mapDispatchToProps, mapStateToProps, Counter)(Counter);