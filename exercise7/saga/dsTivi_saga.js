import api from './api'
import { DANH_SACH_TI_VI } from '../action/actionType'
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {  danh_sach_ti_vi_thanh_cong_action, danh_sach_ti_vi_that_bai_action } from '../action'

function* getdsTivi(action) {
    console.log('action', action)
    try {
        const data = yield api.dsTivi_api()
        const dataSearch = data.filter(item=>item.Ten.toLowerCase().includes(action.search.toLowerCase()))
        yield put(danh_sach_ti_vi_thanh_cong_action(dataSearch))
    } catch (error) {
        yield put(danh_sach_ti_vi_that_bai_action(error))
    }
}

function* dsTivi() {
    yield takeLatest(DANH_SACH_TI_VI, getdsTivi)
   
}

export default dsTivi