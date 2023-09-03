import React, { Component } from 'react';
import { Text, TextInput, Dimensions, Platform, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import {updateUser} from './schemaNguoidung'

const { width } = Dimensions.get('window');

export default class Sua_Nguoi_dung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ma_so: '',
            Ho_ten: ''
        };
    }
    Mo_Hop_thoai(Nguoi_dung) {
        this.setState({
            Ma_so: Nguoi_dung.Ma_so,
            Ho_ten: Nguoi_dung.Ho_ten
        });
        this.refs.Th_Hop_thoai.open();
    }


    Xu_ly_Cap_nhat() {
        if (this.state.Ma_so == '' || this.state.Ho_ten == '') {
            alert('Bạn phải nhập đủ thông tin');
            return;
        }
        let User =  {
            Ma_so: this.state.Ma_so,
            Ho_ten: this.state.Ho_ten
        }
        
        this.refs.Th_Hop_thoai.close();

        updateUser(User)
        .then((responseData) => {
            console.log(responseData)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (
            <Modal ref={'Th_Hop_thoai'} style={{
                borderRadius: Platform.OS === 'ios' ? 20 : 6, shadowRadius: 10,
                width: width - 80, height: 240
            }}
                position='center'
                backdrop={true}

            >
                <Text style={{
                    fontSize: 20, textAlign: 'center',
                    marginTop: 25, marginBottom: 20, color: '#4387fd'
                }}>
                    Thông tin người dùng
                </Text>
                <Text style={{
                    height: 30, borderBottomColor: '#e6e5e5',
                    fontSize: 14, borderBottomWidth: 1,
                    marginBottom: 10, marginLeft: 20, marginRight: 20
                }}>
                    {this.state.Ma_so}
                </Text>
                <TextInput style={{
                    height: 40, borderBottomColor: '#e6e5e5',
                    fontSize: 14, borderBottomWidth: 1,
                    marginBottom: 10, marginLeft: 20, marginRight: 20
                }}
                    placeholder='Họ tên'
                    value={this.state.Ho_ten}
                    onChangeText={(value) => { this.setState({ Ho_ten: value }) }}
                >
                </TextInput>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        backgroundColor: '#4387fd',
                        paddingVertical: 10,
                        marginHorizontal: 20,
                        alignItems: 'center',
                        borderRadius: Platform.OS === 'ios' ? 20 : 6
                    }}
                    onPress={() => this.Xu_ly_Cap_nhat()}
                >
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Đồng ý</Text>
                </TouchableOpacity>
            </Modal>

        );
    }
}
