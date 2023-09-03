import React from "react"
import { View, Alert, Text, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import Geolocation from "@react-native-community/geolocation"

export default class getGeoLocation extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            location: 'unknow',
            watch: 'unknow'
        }
    }

    watchID
    componentDidMount() {  
        Geolocation.getCurrentPosition((position) => {
            console.log(position)
            let coords = JSON.stringify(position.coords)
            this.setState({location: coords})
        }, error => {
            Alert.alert(error)
        },
        { enableHighAccuracy: false, timeout: 20000, maximumAgem: 1000})

        this.watchID = Geolocation.watchPosition((position) => {
            console.log(position)
            let coords = JSON.stringify(position.coords)
            this.setState({watch: coords})
        }, error => {
            console.log('watchID :',error)
        })

    }

    componentWillUnmount() {
        if(this.watchID != null) {
            console.log('componentWillUnmount :', this.watchID)
            Geolocation.clearWatch(this.watchID)
        }
    }

    render() {
        return( 
            <View style={styles.container}>
                <Text>{this.state.location}</Text>
                <Text>{this.state.watch}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignContent: 'center'
    },
})