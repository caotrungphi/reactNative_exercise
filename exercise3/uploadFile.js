import React from "react"
import { View, Text, Alert, SafeAreaView, Image, StyleSheet } from 'react-native'
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import Button from 'react-native-button'
import RNFetchBlob from "rn-fetch-blob"

export default class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filePath: null
        }
    }

    chooseFile() {
        const options = {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            includeBase64: true,
            saveToPhotos: true
        }

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                Alert.alert('user canceller library')
                return
            } else if (response.errorCode == 'permission') {
                Alert.alert('library do not permission')
                return
            } else if (response.errorCode == 'camera_unavailable') {
                Alert.alert('camera unavailable')
                return
            } else if (response.errorCode == 'others') {
                Alert.alert(response.errorMessage)
            }
            console.log(response.assets[0])
            this.setState({ filePath: response.assets[0] })
        })
    }


    upload() {
        RNFetchBlob.fetch('POST', 'http://192.168.1.111:8080/Upload', {
            Authorization: 'Bearer access-token',
            otherHeader: 'foo',
            'Content-Type': 'multipart/form-data'
        }, [
            { name: 'info', data: 'cao trung phi' },
            { name: 'avatar', filename: this.state.filePath.fileName, data: this.state.filePath.base64 }
        ]).then(result => console.log(result)).catch(error => console.log(error))

    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    {
                        this.state.filePath == null ?
                            <Image source={require('../images/upload_image.jpg')} style={styles.img} /> :
                            <Image source={{ uri: this.state.filePath.uri }} style={styles.img} />
                    }
                </View>
                <View style={styles.button}>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        containerStyle={{ padding: 10, height: 45, borderRadius: 4, backgroundColor: 'aqua' }}
                        onPress={() => this.chooseFile()}
                    >
                        choose File
                    </Button>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        containerStyle={{ margin: 10, height: 45, borderRadius: 4, backgroundColor: 'aqua' }}
                        onPress={() => this.upload()}
                    >
                        up load
                    </Button>
                </View>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center'
    },
    img: {
        height: '100%',
        width: '100%',
    }
})