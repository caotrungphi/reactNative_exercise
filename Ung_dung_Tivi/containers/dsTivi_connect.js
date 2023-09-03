import React from "react";
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { danh_sach_ti_vi_action } from '../action'
import Tivi from '../component/Tivi'
import DetailTV from '../component/DetailTV'

const toStateFromValue = (state) => {
    return {
        dsTivi: state.dsTivi
    }
}

const toDispatchFromFunction = (dispatch) => {
    return {
        getTivi: (search) => dispatch(danh_sach_ti_vi_action(search))
    }
}

const connect_Tivi = connect(toStateFromValue, toDispatchFromFunction)(Tivi)

const Stack = createStackNavigator()


export default class TiviNavigation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName='Tivi'
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'limegreen',
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24
                        },
                    }}
                >
                    <Stack.Screen name='Tivi' component={connect_Tivi}
                        options={{
                            title: 'Danh Sách Tivi',
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name='DetailTV' component={DetailTV}
                        options={{
                            title: 'Chi Tiết Tivi',
                            headerBackTitleStyle: {
                                color: 'gold',
                                fontSize: 18,

                            },
                            headerBackImage: () => <Image
                                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/009/351/258/non_2x/arrow-icon-arrows-sign-black-arrows-free-png.png' }}
                                style={styles.img}
                            />,
                            headerBackTitle: 'Trở Lại',

                        }}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        tintColor: 'gold',
        transform: [{ rotate: '180deg' }]
    },
})