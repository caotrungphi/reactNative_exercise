import {INCREMENT, DECREMENT} from '../actions/actionTypes';

const counterReducers = (times = 0, action) => {
    //console.log(`counterReducers:${JSON.stringify(action)}`)
    switch(action.type){
        case INCREMENT:
            return ++times;
        case DECREMENT:
            return --times;
        default:
            return times;
    }
}
export default counterReducers;