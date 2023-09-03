import { DANH_SACH_TI_VI } from '../action/actionType'
import data from '../../data/dulieu'

function dsTivi(state = [], action) {
    switch (action.type) {
        case DANH_SACH_TI_VI:
            return data.dsTivi.filter(item=>item.Ten.toLowerCase().includes(action.search.toLowerCase()))
            break
        default:
            return data.dsTivi
            break
    }

}

export default dsTivi