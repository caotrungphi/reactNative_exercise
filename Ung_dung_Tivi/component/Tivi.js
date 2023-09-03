import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions, SafeAreaView, StyleSheet, BackHandler } from 'react-native'
const url = 'https://services-uc7i.onrender.com'
const { width, height } = Dimensions.get('window')


export default class Tivi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gtTim: '',
            width: width,
            num: width < height ? 1 : 2
        }
    }

    onChange = ({ window }) => {
        let { width, height } = window
        let num = width < height ? 1 : 2
        this.setState({ width, num })
    }


    Tim() {
        Dimensions.addEventListener('change', this.onChange)
        this.props.getTivi(this.state.gtTim)
    }

    render() {
        console.log('render')
        return (
            <SafeAreaView style={{ backgroundColor: 'lightgreen', flex: 1 }}>
                <View style={[styles.containerRow, { backgroundColor: "aqua" }]}>
                    <View style={[styles.contentColumn, { width: '90%', borderBottomWidth: 0 }]}>
                        <TextInput
                            placeholder="Nhập giá trị tìm"
                            onChangeText={(gtTim) => this.setState({ gtTim })}
                            value={this.state.gtTim}
                            onSubmitEditing={() => this.Tim()}
                            placeholderTextColor="#ffffff"
                        />
                    </View>
                    <View style={[styles.contentColumn, { width: '10%', borderBottomWidth: 0 }]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.Tim()}>
                            <Image source={require("../../images/search.png")} />
                        </TouchableOpacity>

                    </View>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.dsTivi}
                    numColumns={this.state.num}
                    key={this.state.num}
                    keyExtractor={item => item.Ma_so}
                    extraData={item => item.Ma_so}
                    renderItem={({ item, index }) => {
                        return <ListItem {...{ item, index, num: this.state.num, width: this.state.width, navigation: this.props.navigation }} />
                    }}
                />
            </SafeAreaView>
        )
    }
}


class ListItem extends React.Component {

    render() {
        return (
            <View style={{ alignItems: 'center', padding: 10, width: this.props.width / this.props.num }}>

                <Image
                    source={{ uri: `${url}/images/${this.props.item.Ma_so}.png` }}
                    style={{ height: 240, width: '100%', resizeMode: 'contain' }}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DetailTV', { item: this.props.item })}
                >

                    <View style={{ alignItems: 'flex-start', width: '100%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.text, { fontWeight: 500 }]}>TÊN : </Text>
                            <Text style={[styles.text, { color: 'blue' }, { marginRight: 50 }]}>{this.props.item.Ten}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.text, { fontWeight: 500 }]}>GIÁ : </Text>
                            <Text style={[styles.text, { color: 'red' }]}>{this.props.item.Don_gia_Ban}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        letterSpacing: 1.2,
        color: '#333',
        lineHeight: 30
    },
    img: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        tintColor: 'gold',
        transform: [{ rotate: '180deg' }]
    },
    containerRow: {
        flexDirection: "row",
        paddingHorizontal: 5,
        marginVertical: 0,


    },
    contentColumn: {
        flexDirection: "column",
        padding: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
})