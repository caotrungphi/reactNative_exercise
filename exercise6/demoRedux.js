import React from "react"
import { View, Text } from 'react-native'
import { legacy_createStore as createStore } from "redux"
import Button from 'react-native-button'

const initialState = 0

function reducer(initialState, action) {
    switch (action.type) {
        case 'plusOne':
            return initialState += 1
            break;
        default:
            return initialState
            break;
    }
}

const store = createStore(reducer, initialState)

store.subscribe(()=> console.log(store.getState()))

export default class demo extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    style={{ fontSize: 20, color: 'green' }}
                    styleDisabled={{ color: 'red' }}
                    onPress={() => store.dispatch({type: 'plusOne'})}>
                    Press Me!
                </Button>
            </View>
        )
    }
}