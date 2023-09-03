import React,{Component} from 'react';
import {View, Text,Image, FlatList, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Them_Thong_bao from './themThongbao';
import Cap_nhat_Thong_bao from './capNhatThongbao';
import {Doc_Danh_sach,Them,Cap_nhat,Xoa,Xoa_Tat_ca} from '../models/schemaThongbao';
import realm from '../models/schemaThongbao';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
class FlatListItem extends Component{ 
    constructor(props){
        super(props);  
        this.state ={
            So:0
        }      
    }
    refresh_Thong_bao(){
        this.setState({So: this.state.So + 1});   
    }
    Xoa_Thong_bao(){
        Alert.alert(
            "Thông báo", 
            "Bạn có chắc xóa không?",
            [
                {text:"Bỏ qua", onPress:() =>{console.log("Chọn No")}, style:"cancel"},
                {text:"Đồng ý", onPress:() =>{
                    Xoa(this.props.item.id).then(()=>{
                        alert('Xóa thành công')
                    }).catch((Loi)=>{
                        console.log(Loi);
                    });
                }}
            ],
            {cancelable:true}
        );
    }
    Cap_nhat_Thong_bao(){
        this.props.parentFlatList.refs.Th_Cap_nhat.Mo_Hop_thoai(this.props.item,this);
    }
    render(){
        let Ngay_gio= this.props.item.Ngay_Cap_nhat.getDate() + '/' +
                      this.props.item.Ngay_Cap_nhat.getMonth() + 1 + '/' + 
                      this.props.item.Ngay_Cap_nhat.getFullYear() + ' ' + 
                      this.props.item.Ngay_Cap_nhat.getHours() + ':' + 
                      this.props.item.Ngay_Cap_nhat.getMinutes();
        return(
            <View style={{flex:1, flexDirection:"column"}}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Image 
                        style={{height:30,width:30, margin:15, borderRadius:20}} 
                        source={require('../images/speaker.png')}>
                    </Image>
                    <View style={{flex:1,justifyContent:'center', height:60}}>
                        <Text style={styles.itemText}>{this.props.item.Noi_dung}</Text> 
                        <Text style={styles.itemDate}>{Ngay_gio}</Text>                       
                    </View>
                    <View style={{justifyContent:'center', height:60}}>
                        <TouchableOpacity 
                            onPress={this.Cap_nhat_Thong_bao.bind(this)} 
                            activeOpacity={0.5}>
                            <Image 
                                style={{height:20,width:20, margin:5, tintColor:'#A7A7A7'}} 
                                source={require('../images/edit-32.png')}>      
                            </Image> 
                        </TouchableOpacity>  
                    </View>
                    <View style={{justifyContent:'center', height:60}}>
                        <TouchableOpacity 
                            onPress={this.Xoa_Thong_bao.bind(this)} 
                            activeOpacity={0.5}>
                            <Image 
                                style={{height:20,width:20, margin:5, tintColor:'#A7A7A7'}} 
                                source={require('../images/trash-32.png')}>      
                            </Image>   
                        </TouchableOpacity>
                    </View>    
                </View>
                <View style={{height:1, backgroundColor:"#e6e5e5"}}></View>
            </View>
        );
    }
}

export default class dsThong_bao extends Component{   
    constructor(props){
        super(props);
        this.state = {
            Danh_sach_Thong_bao:[],
            key:0
        };       
        
    }
    componentDidMount(){
        Doc_Danh_sach().then((Danh_sach)=>{
            this.setState({Danh_sach_Thong_bao:Danh_sach});
        }).catch((Loi)=>{
            this.setState({Danh_sach_Thong_bao:[]});
        })
        
        realm.addListener('change',()=>{
            Doc_Danh_sach().then((Danh_sach)=>{
                this.setState({Danh_sach_Thong_bao:Danh_sach});
            }).catch((Loi)=>{
                this.setState({Danh_sach_Thong_bao:[]});
            })
        });  
        
    }
    
    refresh_Danh_sach_Thong_bao(id){
        this.setState({key:id});   
        this.refs.Th_Danh_sach.scrollToEnd();    
    }
    Them_Thong_bao(){
        this.refs.Th_Them.Mo_Hop_thoai();
    }
    render(){        
        return (
            <View style={{flex:1}}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Danh sách thông báo</Text>
                    <TouchableOpacity onPress={this.Them_Thong_bao.bind(this)} activeOpacity={0.5}>
                        <Image style={styles.inputIcon} source={require('../images/plus-32.png')}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    ref={'Th_Danh_sach'} 
                    data={this.state.Danh_sach_Thong_bao} 
                    extraData={this.state.key}
                    keyExtractor={(item) => item.id} 
                    renderItem={({item, index})=>{
                        return(
                            <FlatListItem item={item} index={index} parentFlatList={this}>
                            </FlatListItem>
                        );
                    }}>
                </FlatList>        
                <Them_Thong_bao ref={'Th_Them'} parentFlatList={this}></Them_Thong_bao>
                <Cap_nhat_Thong_bao ref={'Th_Cap_nhat'} parentFlatList={this}></Cap_nhat_Thong_bao>
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
    itemDate:{
        color:"#000000",
        padding:5,
        paddingTop:0,
        fontSize:12,
        fontStyle:'italic'
    },
    inputContainer: {
        borderColor: '#b9b7b7',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height:50,
        flexDirection: 'row',
        alignItems:'center',               
    },
    text:{
        marginRight:5, 
        borderBottomColor: '#FFFFFF', 
        flex:1, 
        color:'#ffffff', 
        fontSize:18, 
        textAlign:'center', 
        justifyContent:'center'  
    },
    inputIcon:{
        width:26,
        height:26,
        tintColor:'#ffffff',
        marginRight:5,
        justifyContent: 'center'
    }
})

