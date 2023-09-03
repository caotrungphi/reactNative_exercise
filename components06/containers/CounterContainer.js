import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import {incrementAction, decrementAction} from '../actions';

const mapStateToProps = state =>{
    console.log(`state:${JSON.stringify(state)}`)
    return {
        times: state.counterReducers? state.counterReducers:0
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onIncrement: (step)=>{
            dispatch(incrementAction(step));
        },
        onDecrement: (step)=>{
            dispatch(decrementAction(step));
        }
    }
}
const CounterContainer= connect(mapStateToProps,mapDispatchToProps)(CounterComponent);
export default CounterContainer;