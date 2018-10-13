import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>

class GMap extends Component {
  static defaultProps = {
    center: {lat:40.728283, lng:-73.990},
    zoom: 11
  };

  render() {
    return (
      <div className="" style={{height: '50vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLkeys={{key:process.env.REACT_APP_GOOGLE_MAP}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          <AnyReactComponent
            lat={40.728283}
            lng={-73.990339}
            text={'test'}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;
