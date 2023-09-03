import React from "react";
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from "react-native";
const URL_SERVICE = `http://192.168.1.113:8080`
import api from '../aip.services'
export default class DsNguoidung extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dsNguoidung: []
        }
    }
    componentDidMount() {
        api.get(`${URL_SERVICE}/listUser`).then(result => {
            this.setState({
                dsNguoidung: result
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        if (this.state.dsNguoidung.length > 0) {
            return (
                <View style={style.container}>
                    <View>
                        <Text style={style.title}>Danh sách Người dùng</Text>
                    </View>
                    <FlatList
                        data={this.state.dsNguoidung}
                        keyExtractor={(item) => item.Ma_so}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index} />
                            )

                        }}
                    />


                </View>
            )
        } else {
            return (
                <View style={{flex:1,flexDirection:"row", alignSelf:"center"  }}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            )
        }

    }

}

class FlatListItem extends React.Component {
    render() {
        return (
            <View style={style.containerRow}>
                <View style={[style.contentColumn, { width: '10%' }]}>
                    <Image source={require('../images/avatar-40.png')} style={style.img} />
                </View>
                <View style={[style.contentColumn, { width: '80%' }]}>
                    <Text style={style.textSize}> {this.props.item.Ho_ten}</Text>
                </View>
                <View style={[style.contentColumn, { width: '10%' }]}>
                    <Image source={require('../images/greater-than-50.png')} style={style.img} />
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
        paddingHorizontal: 0,
        marginVertical: 5,
    },
    contentColumn: {
        flexDirection: "column",
        padding: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },

    img: {
        width: '100%',
        height: 40,
        resizeMode: 'contain',

    },
    textSize: {
        fontSize: 14,
        paddingTop: 10,
        paddingLeft: 10
    },
    title: {
        textAlign: "center",
        padding: 15,
        fontSize: 24
    }

})