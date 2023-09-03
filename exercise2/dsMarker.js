import React from "react"
import { StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"

export default class dsMarker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 10.753280886196105, 
                longitude: 106.6839884552301,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            },
            dsmarkers: [
                {
                    latitude: 10.753280886196105, 
                    longitude: 106.6839884552301,
                }
            ]
        }
    }

    onPress(data) {
        let coordinate = data.nativeEvent.coordinate
        console.log('mapview: ', data)
        let ds = [ ...this.state.dsmarkers ,coordinate]
        this.setState({dsmarkers: ds})
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
                    mapType="standard"
                    zoomEnabled={true}
                    pitchEnabled={true}
                    followsUserLocation={true}
                    showsCompass={true}
                    showsBuildings={true}
                    showsTraffic={true}
                    showsIndoors={true}
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    initialRegion={this.state.region}
                    onPress={this.onPress.bind(this)}
                >
                    {this.state.dsmarkers.map((marker, index) => {
                        return(
                            <Marker
                                key={index}
                                coordinate={marker}   
                                onPress={(e) => {
                                    console.log('marker :', e.nativeEvent.coordinate)
                                }}                         
                            />
                        )
                    })}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})