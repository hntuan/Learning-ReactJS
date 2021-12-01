import React, { Component } from "react";

class Size extends Component {

  changeSize = (value) => {
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size: {this.props.size}px</h3>
        </div>
        <div className="panel-body">
          <button type="button" onClick={() => this.changeSize(-2)} className="btn btn-success">
            Giảm
          </button>
          <button type="button" onClick={() => this.changeSize(+2)} className="btn btn-success ml-2">
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default Size;
