import React, { Component } from "react";

class Result extends Component {

    setStyle(){
        return{
            color: this.props.onColor,
            borderColor: this.props.onColor,
            fontSize: this.props.onSize,
        }
    }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color: {this.props.onColor}- Fontsize: {this.props.onSize}px</p>
        <div style={ this.setStyle() } id="content">Nội dung settings</div>
      </div>
    );
  }
}

export default Result;
