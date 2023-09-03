import { DANH_SACH_TI_VI, DANH_SACH_TI_VI_THANH_CONG, DANH_SACH_TI_VI_THAT_BAI } from './actionType'

export function danh_sach_ti_vi_action (search = '') {
    return {
        type: DANH_SACH_TI_VI,
        search: search
    }
}

export function danh_sach_ti_vi_thanh_cong_action (data) {
    return {
        type: DANH_SACH_TI_VI_THANH_CONG,
        data: data
    }
}

export function danh_sach_ti_vi_that_bai_action (error) {
    return {
        type: DANH_SACH_TI_VI_THAT_BAI,
        error: error
    }
}