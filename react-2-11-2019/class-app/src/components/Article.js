import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>

                {this.props.match.params.art}
            </div>
        );
    }
}


Article.propTypes = {
    
};

export default Article
