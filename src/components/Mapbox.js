import React, { Component } from 'react';
import '../App.css';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keWJpciIsImEiOiJja2N5eGY4Y3UwOTgzMnZwbXBqdTBzZ2ZwIn0.0k3NisxEj1wBpizvtn7eZQ';

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});

class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -79.4512,
      lat: 43.6568,
      zoom: 13
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/andybir/ckcyxm1l200ia1ipul3szs8jo',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    )
    
  }

  render() {
    return (
      <div className="container p-3">
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    );
  }
}

export default Mapbox;






