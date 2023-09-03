import React, { Component } from 'react';
import { StyleSheet, View,Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, } from 'react-native-maps';

var Danh_sach = [
  {
    latitude: 10.7631321,
    longitude: 106.6814997
  }
];
export default class dsMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 10.7631321,
        longitude: 106.6814997,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      markers: Danh_sach
    }
  }

  onPress(data) {
    let long = data.nativeEvent.coordinate.longitude;
    let lat = data.nativeEvent.coordinate.latitude;
    Danh_sach.push({
      latitude: lat,
      longitude: long
    });
    this.setState({ markers: Danh_sach });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={this.state.region}
          onPress={this.onPress.bind(this)}
          
        >
          {
            this.state.markers.map(marker => (
              <Marker 
                key={marker.latitude} 
                coordinate={marker} 
                description={marker.description} 
                title={marker.title} 
                onPress={(e)=>{
                  Alert.alert("Tọa độ",JSON.stringify(e.nativeEvent.coordinate))
                }}  
                />
            ))
          }
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