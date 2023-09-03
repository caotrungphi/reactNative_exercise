import { CAU_CHAO } from '../actions/actionTypes'
const cauChaoReducer = (hoTen = '', action) => {
    console.log(`counterReducers:${JSON.stringify(action)}`)
    switch (action.type) {
        case CAU_CHAO:
            return action.hoTen != "" ? 'Chào bạn: ' + action.hoTen : "";
        default:
            return hoTen;
    }
}
export default cauChaoReducer;