import CounterContainer from './containers/CounterContainer';
import CauChaoContainer from './containers/cauChaoContainer';
import Tim_Danh_sach_Nguoi_dung from './containers/Tim_Danh_sach_Nguoi_dung_Container';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers'
// Redux Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'
//Middleware
const sagaMiddleware=createSagaMiddleware();
// Từ applyMiddleware vào Reducers thì tạo một store, 
// sagaMiddleware nằm giữa Action và Reducers
let store = createStore(allReducers,applyMiddleware(sagaMiddleware)); // Tạo store

const Store = () => (
    <Provider store={store}>
        {/* <CauChaoContainer /> */}
        {/* <CounterContainer /> */}
        <Tim_Danh_sach_Nguoi_dung />
    </Provider>
)
sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app

export default Store;