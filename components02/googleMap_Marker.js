import React from "react";
import { StyleSheet, Text, View, Alert} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
let maker = {
    latitude: 10.7631321,
    longitude: 106.6814997
}
export default class ShowMarker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 10.7631321,
                longitude: 106.6814997,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onPress={
                        (e) => {
                            console.log(e.nativeEvent)
                        }
                    }
                >
                    <Marker
                        draggable
                        pinColor="red"
                        coordinate={maker}
                        title={'Trung Tâm Tin Học'}
                        description={'React Native Nâng cao'}
                        onDragEnd={
                            (e) => {
                                Alert.alert("Tọa độ", JSON.stringify(e.nativeEvent.coordinate))
                            }
                        }
                    />

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