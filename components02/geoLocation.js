import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class geoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 10.7631321,
        longitude: 106.6814997,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      marker: {
        latitude: 10.7631321,
        longitude: 106.6814997
      }
    }
  }
  componentDidMount() {
    
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          marker: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }




  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.region}
        >
          <Marker
            key={this.state.marker.latitude} coordinate={this.state.marker} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});