import React from "react"
import { View, Text, Alert, StyleSheet} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps"

export default class map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialRegion: {
                latitude: 10.753272196126098, 
                longitude: 106.68389920800637,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            },
            marker: {
                latitude: 10.753272196126098, 
                longitude: 106.68389920800637,
            }
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={this.state.initialRegion}
                    onRegionChange={(initialRegion) => { console.log('onRegionChange :',initialRegion)}}
                    onPress={(e) => {
                        console.log('onPress :',e.nativeEvent.coordinate)
                        this.setState({marker: e.nativeEvent.coordinate})
                    }} 
                >
                    <Marker 
                        draggable
                        pinColor="green"
                        key={this.state.marker.latitude}
                        coordinate={this.state.marker}
                        title="trung tam tin hoc"
                        description="lap trinh react native"
                        onDragEnd={(e) => {
                            this.setState({marker: e.nativeEvent.coordinate})
                            console.log('onDragEnd',e.nativeEvent.coordinate)
                        }} 
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
        ...StyleSheet.absoluteFillObject,
    }
})