import { DANH_SACH_TI_VI, DANH_SACH_TI_VI_THANH_CONG, DANH_SACH_TI_VI_THAT_BAI } from '../action/actionType'

function dsTivi(data = [], action) {
    console.log('reduce' , data)
    switch (action.type) {
        case DANH_SACH_TI_VI_THANH_CONG:
            return action.data
            break
        case DANH_SACH_TI_VI_THAT_BAI:
            return []
            break
        default:
            return data
            break
    }

}

export default dsTivi