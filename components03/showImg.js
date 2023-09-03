import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, PermissionsAndroid, Alert, TouchableOpacity, LogBox } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
LogBox.ignoreAllLogs();


export default class showImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.log(err);
        return false;
      }
    } else return true;
  };

  requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        console.log('requestExternalWritePermission', granted )
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.log(err);
        Alert.alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true
    };
    let isCameraPermitted = await this.requestCameraPermission();
    let isStoragePermitted = await this.requestExternalWritePermission();
    if (isCameraPermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response.assets[0]);

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
        console.log('base64 -> ', response.assets[0].base64);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width -> ', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);

        this.setState({
          filePath: response.assets[0]
        })
      });
    }
  };

  chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true
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
      // console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      console.log('Response = ', response.assets[0]);
      this.setState({
        filePath: response.assets[0]
      })
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.titleText}>
          Example of Image Picker in React Native
        </Text>
        <View style={styles.container}>
          {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + this.state.filePath.base64,
          }}
          style={styles.imageStyle}
        /> */}
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={styles.imageStyle}
          />
          <Text style={styles.textStyle}>{this.state.filePath.uri}</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => this.captureImage('photo')}>
            <Text style={styles.textStyle}>
              Launch Camera for Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => this.captureImage('video')}>
            <Text style={styles.textStyle}>
              Launch Camera for Video
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => this.chooseFile('photo')}>
            <Text style={styles.textStyle}>Choose Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => this.chooseFile('video')}>
            <Text style={styles.textStyle}>Choose Video</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});