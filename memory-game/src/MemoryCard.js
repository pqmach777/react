import React from 'react';
import './MemoryCard.css'

class MemoryCard extends React.Component {

    render() {
        var memoryCardInnerClass = "MemoryCardInner";
        if (this.props.isFlipped){
            var cardFlipped = memoryCardInnerClass.concat(' flipped')
        }
        
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={cardFlipped}>
                    <div className="MemoryCardBack"><img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt=""/></div>
                    <div className="MemoryCardFront">{this.props.symbol}</div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;