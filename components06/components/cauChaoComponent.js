import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class cauChaoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hoTen: ''
        };
    }

    Xuat_Cau_chao() {
        let hoten = this.state.hoTen;
        this.props.onXuat(hoten);
    }
    componentDidMount() {
        this.props.onXuat('');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Nhập họ tên"
                        value={this.state.hoTen}
                        onChangeText={value => this.setState({ hoTen: value })}
                        onSubmitEditing={() => { this.Xuat_Cau_chao() }}
                        placeholderTextColor="chocolate"
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Button style={{ fontSize: 16, color: '#ffffff' }}
                        containerStyle={{
                            width: 200, padding: 8, marginLeft: 10,
                            marginRight: 10, height: 38,
                            borderRadius: 5, backgroundColor: '#4387fd', marginTop: 10
                        }}
                        onPress={() => { this.Xuat_Cau_chao() }}
                    >
                        Xuất Câu chào
                    </Button>
                </View>
                <Text style={styles.text} >{this.props.hoTen}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 20,
        color: '#4387fd'
    },
    inputs: {
        height: 40,
        borderColor: 'green',
        borderWidth: 1,
        fontSize: 14,
        flex: 1,
        margin:5
    }
});