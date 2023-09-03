import React,{Component} from 'react';
import {View, Text,Image, FlatList, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Them_Nguoi_dung from './themNguoidung'
import Cap_nhat_Nguoi_dung from './capNhatNguoidung'
import {Doc_Danh_sach,Them, Cap_nhat, Xoa} from '../models/schemaNguoidung'
import realm from '../models/schemaNguoidung';

class FlatListItem extends Component{ 
    constructor(props){
        super(props);  
        this.state ={
            So:0
        }      
    }
    refresh_Nguoi_dung(){
        this.setState({So: this.state.So + 1});   
    }
    Xoa_Nguoi_dung(){
        Alert.alert(
            "Thông báo", 
            "Bạn có chắc xóa không?",
            [
                {text:"Bỏ qua", onPress:() =>{console.log("Chọn No")}, style:"cancel"},
                {text:"Đồng ý", onPress:() =>{
                    Xoa(this.props.item.Ma_so).then(()=>{
                        alert('Xóa thành công')
                    }).catch((Loi)=>{
                        console.log(Loi);
                    });
                    //this.props.parentFlatList.refresh_Danh_sach_Nguoi_dung(this.props.item.Ma_so);
                }}
            ],
            {cancelable:true}
        );
    }
    Cap_nhat_Nguoi_dung(){
        this.props.parentFlatList.refs.Th_Cap_nhat.Mo_Hop_thoai(this.props.item,this);
    }
    render(){
        return(
            <View style={{flex:1, flexDirection:"column"}}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Image 
                        style={{height:30,width:30, margin:10, borderRadius:20}} 
                        source={require('../images/avatar-40.png')}>
                    </Image>
                    <View style={{flex:1,justifyContent:'center', height:50}}>
                        <Text style={styles.itemText}>{this.props.item.Ma_so + ' ' +this.props.item.Ho_ten }</Text>                        
                    </View>
                    <View style={{justifyContent:'center', height:50}}>
                        <TouchableOpacity 
                            onPress={this.Cap_nhat_Nguoi_dung.bind(this)} 
                            activeOpacity={0.5}>
                            <Image 
                                style={{height:20,width:20, margin:5, tintColor:'#A7A7A7'}} 
                                source={require('../images/edit-32.png')}>      
                            </Image> 
                        </TouchableOpacity>  
                    </View>
                    <View style={{justifyContent:'center', height:50}}>
                        <TouchableOpacity 
                            onPress={this.Xoa_Nguoi_dung.bind(this)} 
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

export default class dsNguoidung extends Component{   
    constructor(props){
        super(props);
        this.state = {
            Gia_tri_tim: '',
            Danh_sach_Nguoi_dung:[],
            key:''
        };
    }
    componentDidMount(){
        Doc_Danh_sach().then((Danh_sach)=>{
            this.setState({Danh_sach_Nguoi_dung:Danh_sach});
        }).catch((Loi)=>{
            this.setState({Danh_sach_Nguoi_dung:[]});
        })
        
        realm.addListener('change',()=>{
            Doc_Danh_sach().then((Danh_sach)=>{
                this.setState({Danh_sach_Nguoi_dung:Danh_sach});
            }).catch((Loi)=>{
                this.setState({Danh_sach_Nguoi_dung:[]});
            })
            
        });  
        
    }
    refresh_Danh_sach_Nguoi_dung(Ma_so){
        this.setState({key:Ma_so});   
        this.refs.Th_Danh_sach.scrollToEnd();    
    }
    Them_Nguoi_dung(){
        this.refs.Th_Them.Mo_Hop_thoai();
    }
    render(){        
        return (
            <View style={{flex:1}}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Danh sách người dùng</Text>
                    <TouchableOpacity onPress={this.Them_Nguoi_dung.bind(this)} activeOpacity={0.5}>
                        <Image style={styles.inputIcon} source={require('../images/plus-32.png')}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    ref={'Th_Danh_sach'} 
                    data={this.state.Danh_sach_Nguoi_dung} 
                    extraData={this.state.key}
                    keyExtractor={(item) => item.Ma_so} 
                    renderItem={({item, index})=>{
                        return(
                            <FlatListItem item={item} index={index} parentFlatList={this}>
                            </FlatListItem>
                        );
                    }}>
                </FlatList>        
                <Them_Nguoi_dung ref={'Th_Them'} parentFlatList={this}></Them_Nguoi_dung>
                <Cap_nhat_Nguoi_dung ref={'Th_Cap_nhat'} parentFlatList={this}></Cap_nhat_Nguoi_dung>
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

