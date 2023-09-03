import reducer from "./reducer"
import { legacy_createStore as createStore } from "redux"
import Connect_Tivi from './connect/dsTivi_connect'
import { Provider } from "react-redux"

const store = createStore(reducer)

function App () {

    return <Provider store={store}>
        <Connect_Tivi/>
    </Provider>
}


export default App