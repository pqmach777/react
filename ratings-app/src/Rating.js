import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
library.add(farStar, fasStar)

class Rating extends React.Component {

  constructor(props){
    super(props);

    this.state = {rating: this.props.rating}

  }

  handleClick(ratingValue){
    this.setState({rating: ratingValue})
  }

    render() {
      return (
        <div style={styles.starStyle}>
         
         <FontAwesomeIcon icon={this.state.rating >= 1 ? fasStar : farStar} onClick={this.handleClick.bind(this,1)}></FontAwesomeIcon>
          <FontAwesomeIcon icon={this.state.rating >= 2 ? fasStar : farStar} onClick={this.handleClick.bind(this,2)}></FontAwesomeIcon>
          <FontAwesomeIcon icon={this.state.rating >= 3 ? fasStar : farStar} onClick={this.handleClick.bind(this,3)}></FontAwesomeIcon>
          <FontAwesomeIcon icon={this.state.rating >= 4 ? fasStar : farStar} onClick={this.handleClick.bind(this,4)}></FontAwesomeIcon>
          <FontAwesomeIcon icon={this.state.rating >= 5 ? fasStar : farStar} onClick={this.handleClick.bind(this,5)}></FontAwesomeIcon>
        </div>
      );
    }
  }
  
  export default Rating;

  const styles = {
    starStyle :{
      color: 'orange'
    }
  }