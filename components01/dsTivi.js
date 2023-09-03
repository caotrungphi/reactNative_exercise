import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity,ActivityIndicator } from "react-native";
// class API
import dulieu from "../data/dulieu";
let dsTivi=[];
import api from '../aip.services'
const URL_SERVICE=`http://192.168.1.113:8080`
export default class DsTivi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dsTivi: [],
            gtTim: ''
        }
    }

    Tim() {
        let gtTim = this.state.gtTim;
        let ds=dsTivi.filter(item=>item.Ten.toLowerCase().includes(gtTim.toLowerCase()));
        this.setState({
            dsTivi: ds
        })
    }

    componentDidMount(){
        api.get(`${URL_SERVICE}/listTivi`).then(result=>{
            dsTivi=result;
            this.setState({
                dsTivi: result
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        if(this.state.dsTivi.length>0){
            return (
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
                            <TouchableOpacity activeOpacity={0.5} onPress={()=> this.Tim()}>
                                <Image source={require("../images/search.png")} />
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
    
    
                </View>
            )
        }else{
            return(
                <View style={{flex:1,flexDirection:"row", alignSelf:"center"  }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            )
        }
        
        
    }

}

class FlatListItem extends React.Component {
    render() {
        return (
            <View style={style.containerRow}>
                <View style={[style.contentColumn, { width: '40%' }]}>
                    <Image source={{ uri: `${URL_SERVICE}/${this.props.item.Ma_so}.png` }} style={style.img} />
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