import { DANH_SACH_TI_VI } from './actionType'

export function danh_sach_ti_vi_action (search) {
    return {
        type: DANH_SACH_TI_VI,
        search: search
    }
}