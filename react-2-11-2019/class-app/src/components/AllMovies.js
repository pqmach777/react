import React from 'react';
import PropTypes from 'prop-types';


class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        // this.navToHome = this.navToHome.bind(this);
        this.history = props.history;
    }

    navToHome(){

        this.history.push('/');
    }

    render() {
        return (
            <div>
                All Movies

                <button onClick={()=>{this.navToHome()}}>Home</button>
            </div>
        );
    }
}


AllMovies.propTypes = {
    
};

export default AllMovies