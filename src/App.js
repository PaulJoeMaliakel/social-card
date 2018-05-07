import React from 'react';
import Message from './components/message';
import cardDetails from './cardDetails';
import Headline from './components/headline';
import Logo from './components/logo';
import CardCredits from './components/cardCredits';


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <div className="card">
          <div className="main">
          <Logo />

          <Headline headline={cardDetails.headline}/>
          <CardCredits name={cardDetails.name} urlDisplayName={cardDetails.urlDisplayName}/>

          </div>
          <div>
          <Message headline={cardDetails.headline} message={cardDetails.message} url={cardDetails.url}/>
          </div>
        </div>
        </div>
    );

  }
}
export default App;