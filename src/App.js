import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Header from './Components/Header';
import Card from './Components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
     <Card></Card>
      </div>
    );
  }
}

export default App;
