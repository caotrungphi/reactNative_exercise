import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, LogBox } from 'react-native';
import Button from 'react-native-button';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

LogBox.ignoreAllLogs();
import RNFetchBlob from 'rn-fetch-blob'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: null
    }
  }
  chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
      saveToPhotos:true
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      //console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);
      //console.log('Response = ', response.assets[0]);
      
      this.setState({
        filePath: response.assets[0]
      })

    });
  }
  upload() {
    RNFetchBlob.fetch('POST', 'http://192.168.1.111:8080/Upload', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
      { name: 'info', data: 'Nguyễn thị bé Bé' },
      { name: 'avatar', filename: 'ql_1.png', data: this.state.filePath.base64 }
    ]
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    console.log(this.state.filePath)
  }
  renderElement() {

    if (this.state.filePath===null) {
      return <Image source={require("../images/upload_image.jpg")} style={styles.imageStyle} />
      
    } else {
      return <Image source={{ uri: this.state.filePath.uri }} style={styles.imageStyle} />

    }
  }
  render() {

    return (
      <View style={styles.container}>
        {/* {this.renderElement()} */}
        {
          this.state.filePath===null?
            <Image source={require('../images/upload_image.jpg')} style={styles.imageStyle} />:
            <Image source={{ uri: this.state.filePath.uri }} style={styles.imageStyle} />
        }
        <View style={{ flexDirection: 'row' }}>
          <Button style={{ fontSize: 16, color: '#ffffff' }}
            containerStyle={{
              padding: 8, marginLeft: 10,
              marginRight: 10, height: 38,
              borderRadius: 5, backgroundColor: '#4387fd', marginTop: 10
            }}
            onPress={() => this.chooseFile('photo')}>
            Chọn hình
          </Button>
          <Button style={{ fontSize: 16, color: '#ffffff' }}
            containerStyle={{
              padding: 8, marginLeft: 10,
              marginRight: 10, height: 38,
              borderRadius: 5, backgroundColor: '#4387fd', marginTop: 10
            }}
            onPress={this.upload.bind(this)}>
            Tải lên
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  }

});
