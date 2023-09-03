import {connect} from 'react-redux';
import Tim_Danh_sach_Nguoi_dung from '../components/Tim_Danh_sach_Nguoi_dung_Component';
import {Doc_Danh_sach_Nguoi_dung_Action} from '../actions';

const mapStateToProps = state =>{
    console.log(state);
    return {
        Danh_sach: state.Nguoi_dung_Reducers? state.Nguoi_dung_Reducers:[]
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onDocDanhSach: (Gia_tri_tim)=>{
            dispatch(Doc_Danh_sach_Nguoi_dung_Action(Gia_tri_tim));
        }
    }
}
const Tim_Danh_sach_Nguoi_dung_Container= connect(mapStateToProps,mapDispatchToProps)(Tim_Danh_sach_Nguoi_dung);
export default Tim_Danh_sach_Nguoi_dung_Container;