import { DOC_DANH_SACH_NGUOI_DUNG, DOC_DANH_SACH_NGUOI_DUNG_THANH_CONG, DOC_DANH_SACH_NGUOI_DUNG_THAT_BAI } from '../actions/actionTypes';
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api'

export function* Doc_Danh_sach_Nguoi_dung(action) {
    console.log('action',action)
    try {
        const Danh_sach_Nguoi_dung = yield Api.Doc_Danh_sach_Nguoi_dung()

        yield put({
            type: DOC_DANH_SACH_NGUOI_DUNG_THANH_CONG,
            Danh_sach_Nguoi_dung:Danh_sach_Nguoi_dung.filter(Nguoi_dung => {
                return Nguoi_dung.Ho_ten.toLowerCase().includes(action.Gia_tri_tim.toLowerCase())
            })
        });
    }
    catch (Loi) {
        yield put({ type: DOC_DANH_SACH_NGUOI_DUNG_THAT_BAI, Loi: Loi });
    }
}

export function* watch_Doc_Danh_sach_Nguoi_dung() {
    yield takeLatest(DOC_DANH_SACH_NGUOI_DUNG, Doc_Danh_sach_Nguoi_dung);
} 