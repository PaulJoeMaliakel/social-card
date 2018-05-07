import React from 'react';
//import cardDetails from '../cardDetails';
//import App from '../App';

class Message extends React.Component{
    render(){
        return(
            <div className="message">
            <h4 className="message__headline">{this.props.headline} </h4>
            <p className="message__body">{this.props.message}</p>
            <a href={this.props.url} className="message__url">{this.props.url}</a>
            </div>
        );
    }
}
export default Message;