import { connect } from 'react-redux';
import cauChaoComponent from '../components/cauChaoComponent';
import { Cau_chao_Action } from '../actions';

const mapStateToProps = state => {
    return {
        hoTen: state.cauChaoReducer ? state.cauChaoReducer : ""
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onXuat: (hoTen) => {
            dispatch(Cau_chao_Action(hoTen));
        }

    }
}

const cauChaoContainer = connect(mapStateToProps, mapDispatchToProps)(cauChaoComponent);
export default cauChaoContainer;