import "./App.css";
import Reset from "./component/Reset";
import Color from "./component/Color";
import Size from "./component/Size";
import Result from "./component/Result";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      color: "red",
      fontSize: 14,
    }
  }

  onSetColor = (params) => {
    this.setState({ color: params})
  }

  onSetSize = (value) => {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 40){
      this.setState({ 
        fontSize: this.state.fontSize + value
      })
    }
    
  }

  onSettingDefault = (value) => {
    if(value === true){
      this.setState({
        color: "red",
        fontSize: 14,
      })
    }
  }
  
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <Color color={this.state.color} onReceiveColor={this.onSetColor}/>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 border">
            <Size size={this.state.fontSize} onChangeSize={this.onSetSize}/>
            <Reset onSettingDefault={this.onSettingDefault}/>
          </div>

          <Result onColor={this.state.color} onSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}
