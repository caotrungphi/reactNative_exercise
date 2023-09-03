import React,{Component} from 'react';
import {Text, TextInput,  Dimensions,Platform} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {Doc_Danh_sach,Them, Cap_nhat, Xoa} from '../models/schemaNguoidung';

const { width, height } = Dimensions.get('window');
export default class Cap_nhat_Nguoi_dung extends Component{   
    constructor(props){
        super(props);
        this.state = {
            Ma_so:'',
            Ho_ten:''
        };
    }
    Mo_Hop_thoai(Nguoi_dung,Th_Nguoi_dung){
        this.setState({
            Ma_so:Nguoi_dung.Ma_so,
            Ho_ten:Nguoi_dung.Ho_ten,
            Th_Nguoi_dung:Th_Nguoi_dung
        });
        this.refs.Th_Hop_thoai.open();
    }
    Xu_ly_Cap_nhat(){
        if(this.state.Ma_so=='' || this.state.Ho_ten==''){
            alert('Bạn phải nhập đủ thông tin');
            return;
        }
        let Nguoi_dung={
            Ma_so:  this.state.Ma_so,
            Ho_ten: this.state.Ho_ten,            
        }
        Cap_nhat(Nguoi_dung).then((Ket_qua)=>{
            this.state.Th_Nguoi_dung.refresh_Nguoi_dung();
            this.refs.Th_Hop_thoai.close();
        }).catch((Loi)=>{
            console.log(Loi);
        })        
    }
    render(){        
        return (
            <Modal ref={'Th_Hop_thoai'} style={{
                    borderRadius: Platform.OS==='ios'?20:6, shadowRadius: 10,
                    width:width - 80, height:240
                }} 
                position='center'
                backdrop={true}
            >
                <Text style={{
                            fontSize:20, textAlign:'center', 
                            marginTop:25,marginBottom:20, color:'#4387fd'}}>
                    Thông tin người dùng
                </Text>
                <Text  style={{
                            height:30, borderBottomColor:'#e6e5e5',
                            fontSize:14, borderBottomWidth:1, 
                            marginBottom:10, marginLeft:20, marginRight:20}}>
                    {this.state.Ma_so}
                </Text>
                <TextInput  style={{
                                    height:40, borderBottomColor:'#e6e5e5',
                                    fontSize:14, borderBottomWidth:1, 
                                    marginBottom:10, marginLeft:20, marginRight:20}} 
                            placeholder='Họ tên' 
                            value={this.state.Ho_ten}
                            onChangeText={(value) => {this.setState({Ho_ten:value})}}
                >
                </TextInput>
                <Button style={{fontSize:16, color:'#ffffff'}}
                        containerStyle={{
                                        padding:6, marginLeft:100, 
                                        marginRight:100, height:38, 
                                        borderRadius:5, backgroundColor:'#4387fd', marginTop:10}}
                        onPress={this.Xu_ly_Cap_nhat.bind(this)}
                >
                        Đồng ý
                </Button>
            </Modal>
        );
    }
}
