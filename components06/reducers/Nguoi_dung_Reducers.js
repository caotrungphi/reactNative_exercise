import { DOC_DANH_SACH_NGUOI_DUNG} from '../actions/actionTypes';
import Du_lieu from '../../data/Du_lieu';

const Nguoi_dung_Reducers = (Danh_sach_Nguoi_dung = [], action) => {
    switch(action.type){
        case DOC_DANH_SACH_NGUOI_DUNG:
            return Du_lieu.Danh_sach_Nguoi_dung.filter(Nguoi_dung=>{
                return Nguoi_dung.Ho_ten.toLowerCase().includes(action.Gia_tri_tim.toLowerCase())
            })
        default:
            return Du_lieu.Danh_sach_Nguoi_dung;
    }
}
export default Nguoi_dung_Reducers;