import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';

const AnyReactComponent = ({text}) => <div>{text}</div>
const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};
class GMap extends React.Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  render() {
    return (
      <div className="container" style={{height: '50vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLkeys={{key:process.env.REACT_APP_GOOGLE_MAP}}
          defaultCenter={this.props.initialCenter}
          defaultZoom={this.props.zoom}
          >
        </GoogleMapReact>
      </div>
    );
  }
}

GMap.defaultProps = {
  zoom: 0,
  initialCenter: {
    lat: 40.728293,
    lng: -73.990339
  },
  centerAroundCurrentLocation: false,
  visible: true
};

export default GMap;


