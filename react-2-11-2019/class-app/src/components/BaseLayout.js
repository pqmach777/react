import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer'

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>

                <Header /> <br />

                {this.props.children} <br />

                <Footer /> 
            </div>
        );
    }
}


BaseLayout.propTypes = {
    
};

export default BaseLayout