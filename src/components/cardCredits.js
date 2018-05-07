import React from 'react';
import paul from '../paul.jpg'

class CardCredits extends React.Component{
    render(){
        return(
            <div className="credit-box">
                <img src={paul} alt="pic" className="credit-box__headshot"/>
                <h2 className="credit-box__name">{this.props.name}</h2>
            </div>
        );
    }
}
export default CardCredits;