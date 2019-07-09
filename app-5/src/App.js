import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage ='https://cdn.shopify.com/s/files/1/1762/3533/files/92a94ee369dcffc4eba56bb7e15e2952_large.jpg?v=1488827731'/>
      </div>
    );
  }
}

export default App;
