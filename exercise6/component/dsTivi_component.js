import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default class DsTivi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dsTivi: [],
            gtTim: ''
        }
    }

    Tim() {
        let gtTim = this.state.gtTim
        let ds = this.props.getTivi(gtTim)
        this.setState({
            dsTivi: ds
        })
    }

    componentDidMount() {

        console.log('componentDidMount', this.props.dsTivi)
        this.setState({dsTivi: this.props.dsTivi})
        console.log(this.props.getTivi)
    }

    render() {
        return(
        <View style={style.container}>
            <View style={[style.containerRow, { backgroundColor: "aqua" }]}>
                <View style={[style.contentColumn, { width: '90%', borderBottomWidth: 0 }]}>
                    <TextInput
                        placeholder="Nhập giá trị tìm"
                        onChangeText={(gtTim) => this.setState({ gtTim })}
                        value={this.state.gtTim}
                        onSubmitEditing={() => this.Tim()}
                        placeholderTextColor="#ffffff"
                    />
                </View>
                <View style={[style.contentColumn, { width: '10%', borderBottomWidth: 0 }]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.Tim()}>
                        <Image source={require("../../images/search.png")} />
                    </TouchableOpacity>

                </View>
            </View>
            <FlatList

                data={this.state.dsTivi}
                keyExtractor={(item) => item.Ma_so}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <FlatListItem item={item} index={index} />
                    )

                }}
            />
        </View>)
    }
}

class FlatListItem extends React.Component {
    render() {
        return (
            <View style={style.containerRow}>
                <View style={[style.contentColumn, { width: '40%' }]}>
                    <Image source={{ uri: `http://127.0.0.1:5500/images/${this.props.item.Ma_so}.png` }} style={style.img} />
                </View>
                <View style={[style.contentColumn, { width: '60%' }]}>
                    <Text style={style.textSize}> {this.props.item.Ten}</Text>
                    <Text style={[style.textSize, { color: "red" }]}>Giá: {(this.props.item.Don_gia_Ban).toLocaleString()}đ</Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
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

    img: {
        width: '100%',
        height: 60,
        resizeMode: 'contain',

    },
    textSize: {
        fontSize: 12,
        paddingTop: 5,
        paddingLeft: 10
    }
})