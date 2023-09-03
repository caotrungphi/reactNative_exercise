import React from "react"
import { Alert, StyleSheet, View } from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps"
import Geolocation from "@react-native-community/geolocation"

export default class geolocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 10.753261584778095, 
                longitude:  106.68394401159054,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
            },
            marker: {
                latitude: 10.753261584778095,
                longitude:  106.68394401159054,
            }
        }
    }


    componentDidMount() {
        Geolocation.getCurrentPosition(position => {
            let region = {
                latitude: position.coords.latitude,
                longitude:  position.coords.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
            }
            let marker = {
                latitude: position.coords.latitude,
                longitude:  position.coords.longitude,
            }
            this.setState({region, marker})
        }, error => {
            Alert.alert('error :', error)
        },{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
    }


    render() {
        return(
            <View style={styles.container}>
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsTraffic={true}
                    showsUserLocation={true}
                    region={this.state.region}
                    onPress={e => {
                        this.setState({marker: e.nativeEvent.coordinate})
                    }}
                >
                    <Marker
                        pinColor="skyblue"
                        key={this.state.marker.latitude}
                        coordinate={this.state.marker}
                        
                    />
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
        ...StyleSheet.absoluteFillObject
    }
})