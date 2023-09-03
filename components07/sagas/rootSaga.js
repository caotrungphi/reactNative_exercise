// saga effect
import {fork, all} from 'redux-saga/effects';
import {watchIncrement, watchDecrement} from './counterSagas';
import { watch_Doc_Danh_sach_Nguoi_dung} from './Nguoi_dung_Saga'; // add
export default function* rootSaga(){
    // Thực thi nhiều saga
    // yield: chạy tuần tự từng saga	 
    yield all([
        watchIncrement(),
        watchDecrement(),
        watch_Doc_Danh_sach_Nguoi_dung()
    ])
}