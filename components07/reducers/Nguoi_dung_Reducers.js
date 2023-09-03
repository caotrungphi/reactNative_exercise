import { DOC_DANH_SACH_NGUOI_DUNG, DOC_DANH_SACH_NGUOI_DUNG_THANH_CONG, DOC_DANH_SACH_NGUOI_DUNG_THAT_BAI } from '../actions/actionTypes';
const Nguoi_dung_Reducers = (Danh_sach_Nguoi_dung = [], action) => {
    switch (action.type) {
        case DOC_DANH_SACH_NGUOI_DUNG_THANH_CONG:
            return action.Danh_sach_Nguoi_dung;
        case DOC_DANH_SACH_NGUOI_DUNG_THAT_BAI:
            return [];
                
        default:
            return Danh_sach_Nguoi_dung;

    }
}
export default Nguoi_dung_Reducers;