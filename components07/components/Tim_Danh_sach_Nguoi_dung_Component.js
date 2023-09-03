import React,{Component} from 'react';
import {View, Text,Image, FlatList, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

class FlatListItem extends Component{    
    render(){
        return(
            <View style={{flex:1, flexDirection:"column"}}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Image 
                        style={{height:30,width:30, margin:10, borderRadius:20}} 
                        source={require('../../images/avatar-40.png')}>
                    </Image>
                    <View style={{flex:1,justifyContent:'center', height:50}}>
                        <Text style={styles.itemText}>{this.props.item.Ho_ten}</Text>                        
                    </View>
                    <View style={{justifyContent:'center', height:50}}>
                        <Image 
                            style={{height:20,width:20, margin:5, tintColor:'#A7A7A7'}} 
                            source={require('../../images/greater-than-50.png')}>      
                        </Image>   
                    </View>    
                </View>
                <View style={{height:1, backgroundColor:"#e6e5e5"}}></View>
            </View>
        );
    }
}

export default class Tim_Danh_sach_Nguoi_dung extends Component{   
    constructor(props){
        super(props);
        this.state = {
            Gia_tri_tim: ''
        };

    }
    Tim_Nguoi_dung(){
        let Gia_tri_tim = this.state.Gia_tri_tim;
        this.props.onDocDanhSach(Gia_tri_tim);
    }
    componentDidMount(){
        this.props.onDocDanhSach('');
    }
    render(){        
        return (
            <View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Nhập họ tên"
                        value={this.state.Gia_tri_tim}
                        onChangeText={value => this.setState({Gia_tri_tim: value})}
                        onSubmitEditing={()=>this.Tim_Nguoi_dung()}
                        placeholderTextColor="#ffffff"
                    />
                    <TouchableOpacity onPress={()=>this.Tim_Nguoi_dung()} activeOpacity={0.5}>
                        <Image style={styles.inputIcon} source={require('../../images/search.png')}/>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    data={this.props.Danh_sach} 
                    keyExtractor={(item) => item.Ma_so} 
                    renderItem={({item, index})=>{
                        return(
                            <FlatListItem item={item} index={index}></FlatListItem>
                        );
                    }}>
                </FlatList>        
            </View>
        );
    }
}

const styles= StyleSheet.create({
    itemText:{
        color:"#000000",
        padding:5,
        fontSize:14
    },
    inputContainer: {
        borderColor: '#b9b7b7',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height:50,
        flexDirection: 'row',
        alignItems:'center',               
    },
    inputs:{
        height:40,
        marginRight:5,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color:'#ffffff',
        fontSize:14        
    },
    inputIcon:{
        width:26,
        height:26,
        tintColor:'#ffffff',
        marginRight:5,
        justifyContent: 'center'
    }
})