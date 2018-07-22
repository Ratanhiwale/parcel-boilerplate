import React from 'react';
import a from 'react-dom';
import '../scss/index.scss';



const App = () => (
  <div className="App">
     
    <h1 className="App-Title">Hello Parcel x React</h1>
  </div>
);


a.render(<App />, document.getElementById('main'));





if (module.hot) {
    module.hot.accept();
  }