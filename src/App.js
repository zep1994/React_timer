import React, { Component } from 'react';
import Timer from './components/Timer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Timer 
        startCount='500'
       />
      </div>
    );
  }
}

export default App;
