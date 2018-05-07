import React from 'react';
//import cardDetails from '../cardDetails';
//import App from '../App';

class Headline extends React.Component{
    render(){
        return(
            <div className="main__headline">
            <p>{this.props.headline}</p>
            
            </div>
        );
    }
}
export default Headline;