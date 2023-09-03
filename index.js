/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import tivi from './components01/Cap_nhat_Danh_sach_Nguoi_dung'
// import map from './components02/googleMap_Marker'
// import camera from './components03/showImg'
// import dsNguoidung from './components04/dsNguoidung'
// import showImg from './exercise3/showImg'
// import Nguoi_dung from './exercise4/Cap_nhat_Danh_sach_Nguoi_dung'
// import messaging from '@react-native-firebase/messaging';
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage)
// })
import components06 from './components06/demoRedux'
import components07 from './components07/store'
import demoRedux from './exercise6/demoRedux'
import exercise6 from './exercise6/index'
import exercise7 from './exercise7/index'
import Ung_dung_Tivi from './Ung_dung_Tivi/index'
AppRegistry.registerComponent(appName, () => Ung_dung_Tivi)