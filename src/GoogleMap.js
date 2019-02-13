import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '95%',
  height: '40%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: {},
      showingInfoWindow: false,
      selectedPlace: {}
    }
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div style={{ minHeight: '200px'}}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
          }}
        >
          <Marker onClick={this.onMarkerClick} name={this.props.name} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAzmHuzKMI63tf5Dh-K0NrYa3J2fi17IFc'
})(MapContainer);