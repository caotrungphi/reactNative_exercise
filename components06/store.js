import CounterContainer from './containers/CounterContainer';
import CauChaoContainer from './containers/cauChaoContainer';
import Tim_Danh_sach_Nguoi_dung from './containers/Tim_Danh_sach_Nguoi_dung_Container';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers'

let store = createStore(allReducers); // Tạo store

const Store = () => (
    <Provider store={store}>
        <CauChaoContainer />
        {/* <CounterContainer /> */}
        {/* <Tim_Danh_sach_Nguoi_dung /> */}
    </Provider>
)

export default Store;