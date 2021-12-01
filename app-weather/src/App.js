import "./App.css";

import React, { Component } from "react";
import LocationDisplay from "./components/LocationDisplay";
import Test from "./components/test";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       latitude: null,
       errorMessage: '',
       
       content: 'ReacJs',
    }

    window.navigator.geolocation.getCurrentPosition(position=>{
      this.setState({latitude: position.coords.latitude})
    }, error=>{
      this.setState({errorMessage:error})
    });
  }

  Click = () => {
    this.setState({content: 'VueJS'});
  }

  render() {
    return(
      <div className="App">
          <LocationDisplay {...this.state}></LocationDisplay>
          <hr />

          <Test content={this.state.content}></Test>
          <button onClick={this.Click}>Click</button>
      </div>
    );
  }
}

export default App;
