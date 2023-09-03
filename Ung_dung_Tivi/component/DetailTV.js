import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions, SafeAreaView, StyleSheet, BackHandler } from 'react-native'
const url = 'https://services-uc7i.onrender.com'


export default class DetailTV extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'springgreen' }}>
                <Image
                    source={{ uri: `${url}/images/${this.props.route.params.item.Ma_so}.png` }}
                    style={{ height: 240, width: '100%', resizeMode: 'contain' }}
                />
                <View style={{ alignItems: 'flex-start', width: '100%', marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text, { fontWeight: 500 }]}>TÊN : </Text>
                        <Text style={[styles.text, { color: 'blue' }, { marginRight: 50 }]}>{this.props.route.params.item.Ten}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text, { fontWeight: 500 }]}>MÃ SỐ : </Text>
                        <Text style={[styles.text, { color: 'red' }]}>{this.props.route.params.item.Ma_so}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text, { fontWeight: 500 }]}>KÝ HIỆU : </Text>
                        <Text style={[styles.text, { color: 'red' }]}>{this.props.route.params.item.Ky_hieu}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text, { fontWeight: 500 }]}>ĐƠN GIÁ BÁN : </Text>
                        <Text style={[styles.text, { color: 'red' }]}>{this.props.route.params.item.Don_gia_Ban}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text, { fontWeight: 500 }]}>ĐƠN GIÁ NHẬP : </Text>
                        <Text style={[styles.text, { color: 'red' }]}>{this.props.route.params.item.Don_gia_Nhap}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text, { fontWeight: 500 }]}>SỐ LƯỢNG TỒN : </Text>
                        <Text style={[styles.text, { color: 'red' }]}>{this.props.route.params.item.So_luong_Ton}</Text>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        letterSpacing: 1.2,
        color: '#333',
        lineHeight: 30
    }
})