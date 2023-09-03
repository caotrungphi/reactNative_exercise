import {INCREMENT, DECREMENT} from '../actions/actionTypes';
import {put, takeEvery,delay} from 'redux-saga/effects';

// Định nghĩa các hàm redux-saga: function* funcName(){} -> nó là một saga
/* 
Xây dựng hàm watchIncrement: khi một action gọi (INCREMENT của redux) 
thì hàm increment của saga sẽ được gọi trước  
*/
// yield: chạy tuần tự
// takeEvery: đăng ký action cho saga
export function* increment(){
    //yield delay(3000)
    //yield put({ type: 'INCREMENT' })
    console.log('Đây là increment saga');
    
}

export function* watchIncrement(){
    yield takeEvery(INCREMENT, increment);
}
export function* decrement(){
    console.log('Đây là decrement saga');
}

export function* watchDecrement(){
    yield takeEvery(DECREMENT, decrement);
}

