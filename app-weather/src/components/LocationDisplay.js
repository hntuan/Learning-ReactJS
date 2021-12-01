import React, { Component } from 'react';

class LocationDisplay extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.errorMessage && <h3>{this.props.errorMessage}</h3>}
                {this.props.latitude && <h3>latitude: {this.props.latitude}</h3> }
            </div>
        );
    }
}

export default LocationDisplay;