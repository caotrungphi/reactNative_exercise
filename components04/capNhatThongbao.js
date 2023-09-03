import React,{Component} from 'react';
import {Text, TextInput,  Dimensions,Platform} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {Doc_Danh_sach,Them,Cap_nhat,Xoa} from '../models/schemaThongbao'

const { width, height } = Dimensions.get('window');
export default class Cap_nhat_Thong_bao extends Component{   
    constructor(props){
        super(props);
        this.state = {
            id:'',
            Noi_dung:''
        };
    }
    Mo_Hop_thoai(Thong_bao,Th_Thong_bao){
        this.setState({
            id:Thong_bao.id,
            Noi_dung:Thong_bao.Noi_dung,
            Th_Thong_bao:Th_Thong_bao
        });
        this.refs.Th_Hop_thoai.open();
    }
    Xu_ly_Cap_nhat(){
        if(this.state.Noi_dung==''){
            alert('Bạn phải nhập đủ thông tin');
            return;
        }
        let Thong_bao={
            id: this.state.id,
            Noi_dung:this.state.Noi_dung
        }
        Cap_nhat(Thong_bao).then((Ket_qua)=>{
            this.state.Th_Thong_bao.refresh_Thong_bao();
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
                    Thông báo
                </Text>
                
                <TextInput  style={{
                                    height:40, borderBottomColor:'#e6e5e5',
                                    fontSize:14, borderBottomWidth:1, 
                                    marginBottom:10, marginLeft:20, marginRight:20}} 
                            placeholder='Nội dung' 
                            value={this.state.Noi_dung}
                            onChangeText={(value) => {this.setState({Noi_dung:value})}}
                >
                </TextInput>
                <Button style={{fontSize:16, color:'#ffffff'}}
                        containerStyle={{
                                        padding:6, marginLeft:100, 
                                        marginRight:100, height:38, 
                                        borderRadius:5, backgroundColor:'#4387fd', marginTop:50}}
                        onPress={this.Xu_ly_Cap_nhat.bind(this)}
                >
                        Đồng ý
                </Button>
            </Modal>
        );
    }
}
