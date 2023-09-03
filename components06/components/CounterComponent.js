import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';

export default class CounterComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style = {styles.text} >{this.props.times}</Text>
                <Text>{JSON.stringify(this.props)}</Text>
                <View style={{flexDirection:'row'}}>
                    <Button style={{fontSize:16, color:'#ffffff'}}
                            containerStyle={{
                                            width:100, padding:8, marginLeft:20, 
                                            marginRight:20, height:38, 
                                            borderRadius:5, backgroundColor:'#4387fd', marginTop:10}}
                            onPress={()=>{this.props.onIncrement(1)}}
                                            >
                            Tăng
                    </Button>
                    <Button style={{fontSize:16, color:'#ffffff'}}
                            containerStyle={{
                                             width:100, padding:8, marginLeft:10, 
                                            marginRight:10, height:38, 
                                            borderRadius:5, backgroundColor:'#4387fd', marginTop:10}}
                            onPress={()=>{this.props.onDecrement(1)}}
                                            >
                            Giảm
                    </Button>
                </View>
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
        fontSize: 200,
        color: '#4387fd'
    } 
});