import {INCREMENT, DECREMENT} from './actionTypes';
import { CAU_CHAO } from "./actionTypes";
import {DOC_DANH_SACH_NGUOI_DUNG,DOC_DANH_SACH_NGUOI_DUNG_THANH_CONG,DOC_DANH_SACH_NGUOI_DUNG_THAT_BAI} from './actionTypes';
export const incrementAction = (step) =>{
    return {
        type: INCREMENT,        
        step: step     
    }
}

export const decrementAction = (step) =>{
    return {
        type: DECREMENT,        
        step: step     
    }
}

export const Cau_chao_Action=(hoTen)=>{
    return {
            type: CAU_CHAO,
            hoTen: hoTen
    }
}

export const Doc_Danh_sach_Nguoi_dung_Action = (Gia_tri_tim) =>{
    return {
        type: DOC_DANH_SACH_NGUOI_DUNG,        
        Gia_tri_tim:Gia_tri_tim     
    }
}

export const Doc_Danh_sach_Nguoi_dung_Thanh_cong_Action = (Danh_sach_Nguoi_dung) =>{
    return {
        type: DOC_DANH_SACH_NGUOI_DUNG_THANH_CONG,        
        Danh_sach_Nguoi_dung: Danh_sach_Nguoi_dung     
    }
}

export const Doc_Danh_sach_Nguoi_dung_That_bai_Action = (Loi) =>{
    return {
        type: DOC_DANH_SACH_NGUOI_DUNG_THAT_BAI,        
        Loi: Loi     
    }
}