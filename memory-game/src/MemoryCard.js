import React from 'react';
import './MemoryCard.css'

class MemoryCard extends React.Component {
    constructor(){
        super();
        this.state = {isFlipped: false};

    }
    clickHandler(){
        this.setState({
            isFlipped: !this.state.isFlipped
        });
    }
    render() {
        var memoryCardInnerClass = "MemoryCardInner";
        if(this.state.isFlipped === true){
           var cardFlip = memoryCardInnerClass.concat(" flipped")
        } 
        
        return (
            <div className="MemoryCard" onClick={(e)=>{this.clickHandler(e)}}>
                <div className={cardFlip}>
                    <div className="MemoryCardBack"><img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt=""/></div>
                    <div className="MemoryCardFront">∆</div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;