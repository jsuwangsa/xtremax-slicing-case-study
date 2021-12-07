import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import database from "../../database.json";
import Description from "../Description/Description";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: 1.28692,
      lng: 103.85457,
    },
    zoom: 15,
    markerCenter: {},
    locations: database,
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      zoom: 17,
      markerCenter: props.position,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div className="map">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={this.state.mapCenter}
          center={this.state.markerCenter !== {} ? this.state.markerCenter : {}}
          mapTypeControl={false}
          fullscreenControl={false}
          zoomControl={false}
          streetViewControl={false}
          zoom={this.state.zoom}
        >
          {this.state.locations.map((loc) => {
            return (
              <Marker
                name={loc.name}
                title={loc.name}
                // label={loc.name}
                position={{ lat: loc.lat, lng: loc.lng }}
                intro={loc.intro}
                description={loc.description}
                address={loc.address}
                website={loc.website}
                image={loc.image}
                onClick={this.onMarkerClick}
              />
            );
          })}

          {this.state.showingInfoWindow ? (
            <Description data={this.state.selectedPlace} />
          ) : null}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyBaxw_PufQJiOsjk4siSI7p4sKEE1Rf8J8`,
})(MapContainer);
