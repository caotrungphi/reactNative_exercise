import React from "react"
import { View, Text } from 'react-native'
import Button from 'react-native-button'
import { Provider } from "react-redux"
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { put, takeEvery, all, delay } from 'redux-saga/effects'

function* helloSaga() {
    console.log('Hello Sagas!')
}

function* takeEverySaga() {
    yield takeEvery('plusOne', helloSaga)
}

function reducer(initialState = 0, action) {
    console.log('reducer', initialState)
    switch (action.type) {
        case 'plusOne':
            return initialState += 1
            break;
        default:
            return initialState
            break;
    }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
store.subscribe(()=> console.log('subscribe',store.getState()))
sagaMiddleware.run(takeEverySaga)

export default class demo extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        console.log('props',this.props)
        return (
            <Provider store={store}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        style={{ fontSize: 20, color: 'green' }}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => store.dispatch({ type: 'plusOne' })}>
                        Press Me!
                    </Button>
                    <Text>{}</Text>
                </View>
            </Provider>
        )
    }
}