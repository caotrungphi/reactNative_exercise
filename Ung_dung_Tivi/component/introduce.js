import React from "react";
import {View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native'

export default class Introduce extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Iam: [
                'Tên: Cao Trung Phi',
                'Giớ Tính: Nam',
                'Nơi Sinh: TPHCM',
                'Email: caotrungphi@gmail.com',
                'Số Điện Thoại: 0934109200',
                'Hôn Nhân: Độc Thân',
                'Lớp Học: React Native Nâng Cao'
            ]
        }
    }
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'deepskyblue'}}>
                <Image source={{uri: 'https://ps.w.org/wpdevart-vertical-menu/assets/icon-128x128.png?rev=2584189'}}/>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Image 
                        source={{uri: 'https://avatars.githubusercontent.com/u/17947446?v=4'}}
                        style={styles.img}    
                    />
                   
                </View>
                <View style={{flex: 1, padding: 20}}>
                    {this.state.Iam.map((i, index) => {
                        return <Text key={index} style={styles.text}>{i}</Text>    
                    })}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: '100%',
        resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        letterSpacing: 1.5,
        lineHeight: 30
    }
})