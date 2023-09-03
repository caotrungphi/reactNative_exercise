import React from 'react';
import {View,Text,Button} from 'react-native';
import {legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';

let initialState = 0;
// Khai báo Action 
let action = {type: 'INC'};
// Khai báo reducer: nhận 2 tham số vào: 
// state cũ và action được gửi lên sau đó trả ra một state mới, 
// không làm thay đổi state cũ.
const reducer = (state, action)=>{
    console.log('initialState: ' + state)
    if(action.type === 'INC'){
        return ++state;
    }
    return state;
}
// Tạo store
const store = createStore(reducer, initialState);
// store lắng nghe xem có thay đổi gì ko rồi ngay lập tức cập nhật ra View
store.subscribe(()=>{
    if(action.type=='INC'){
        console.log('Current State: ' + store.getState()) // Lấy ra state hiện tại
    }else{
        console.log('Current State: ' + store.getState()) // // Lấy ra state hiện tại
    }
})

// Thực hiện gọi 1 action
//store.dispatch(action);
const demoRedux =() =>{
    return(
        <Provider store={store}>
        <View>
            <Text style={{textAlign:"center", fontSize:24,margin:10}}>Minh họa Redux</Text>
            <Button
                title="Store Thực hiện gọi Action"
                onPress={()=> store.dispatch(action)}
            ></Button>
        </View>
        </Provider>
    )
}



export default demoRedux

