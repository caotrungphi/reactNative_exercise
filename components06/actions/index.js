import {INCREMENT, DECREMENT} from './actionTypes';
import { CAU_CHAO } from "./actionTypes";
import {DOC_DANH_SACH_NGUOI_DUNG} from './actionTypes';
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