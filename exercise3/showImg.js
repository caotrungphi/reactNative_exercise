import React from "react"
import { View, Text, Alert, TouchableOpacity, Platform, PermissionsAndroid, SafeAreaView, Image, StyleSheet } from 'react-native'
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export default class ShowImg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filePath: {}
        }
    }

    requestCameraPermission = async () => {

        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                )
                return granted === PermissionsAndroid.RESULTS.GRANTED
            } catch (error) {
                console.log('error1 : ', error)
                return false
            }

        } else return true
    }

    requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                )
                console.log('requestExternalWritePermission', granted)
                return granted === PermissionsAndroid.RESULTS.GRANTED
            } catch (error) {
                console.log('error2 : ', error)
                return false
            }
        } else return true
    }

    captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30,
            saveToPhotos: true,
            includeBase64: true
        }

        let isCameraPermitted = await this.requestCameraPermission()
        let isStoragePermitted = await this.requestExternalWritePermission()

        console.log('isStoragePermitted',isStoragePermitted)
        console.log('isCameraPermitted',isCameraPermitted)

        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    Alert.alert('user canceller camera picker')
                    return
                } else if (response.errorCode == 'camera_unavailable') {
                    Alert.alert('Camera not available in device')
                    return
                } else if (response.errorCode == 'permission') {
                    Alert.alert('Permission not satisfiel')
                    return
                } else if (response.errorCode == 'others') {
                    Alert.alert(response.errorMessage)
                    return
                }
                console.log('access :', response.assets[0])
                this.setState({ filePath: response.assets[0] })
            })
        }
    }

    chooseFile(type) {
        const options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            includeBase64: true
        }

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                Alert.alert('User cancel libraty')
                return
            } else if (response.errorCode == 'camera_unavailable') {
                Alert.alert('Camera not available in device')
                return
            } else if (response.errorCode == 'permission') {
                Alert.alert('Permission not satisfiel')
                return
            } else if (response.errorCode == 'others') {
                Alert.alert(response.errorMessage)
                return
            }
            console.log('access :', response.assets[0])
            this.setState({ filePath: response.assets[0] })
        })
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.title}>
                    choose file please
                </Text>
                <View style={styles.container}>
                    <Image
                        style={styles.img}
                        source={{ uri: this.state.filePath.uri }}
                    />
                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.5}
                            onPress={() => this.captureImage('photo')}
                        >
                            <Text style={styles.textbutton}>image camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.5}
                            onPress={() => this.captureImage('video')}
                        >
                            <Text style={styles.textbutton}>video camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.5}
                            onPress={() => this.chooseFile('photo')}
                        >
                            <Text style={styles.textbutton}>image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.5}
                            onPress={() => this.chooseFile('video')}
                        >
                            <Text style={styles.textbutton}>video</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: 'green',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        flex: 1,
        width: '100%',
    },
    containerButton: {
        flex: 1,
    },
    textbutton: {
        fontSize: 30,
        margin: 10,
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 4,
        textAlign: 'center'
    }
})