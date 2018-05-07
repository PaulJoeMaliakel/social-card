import React from 'react';
import Sand from '../sand.jpg';


class Logo extends React.Component{
    render(){
        return(
            <div >
           <img src={Sand} alt='sand' className="main__image-logo"/>
            </div>
        );
    }
}
export default Logo;