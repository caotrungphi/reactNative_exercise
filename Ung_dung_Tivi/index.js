
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer"
import Introduce from './component/introduce'
import dsTivi_connect from './containers/dsTivi_connect'
import rootSaga from "./saga/rootSaga"

const saga = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(saga))

store.subscribe(() => {
    console.log('subscribe', store.getState())
})

const Drawer = createDrawerNavigator()

function App() {

    return <Provider store={store}>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Introduce">
                <Drawer.Screen name="Introduce" component={Introduce} 
                    options={{
                        title: 'Giới Thiệu Bản Thân'  
                    }}
                />
                <Drawer.Screen name="Tivi" component={dsTivi_connect}
                    options={{
                        title: 'Danh Sách Tivi',
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    </Provider>
}

saga.run(rootSaga)

export default App