import reducer from "./reducer"
import { legacy_createStore as createStore, applyMiddleware } from "redux"
import Connect_Tivi from './connect/dsTivi_connect'
import { Provider } from "react-redux"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/rootSaga"

const saga = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(saga))

store.subscribe(()=>{
    console.log('subscribe', store.getState())
})

function App () {

    return <Provider store={store}>
        <Connect_Tivi/>
    </Provider>
}

saga.run(rootSaga)

export default App