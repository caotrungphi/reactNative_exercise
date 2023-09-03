import { connect } from 'react-redux'
import dsTivi_component from '../component/dsTivi_component'
import { danh_sach_ti_vi_action } from '../action'

const toStateFromValue = (state) => {
    return {
        dsTivi: state.dsTivi ? state.dsTivi : []
    }
}

const toDispatchFromFunction = (dispatch) => {
    return {
        getTivi: (search) => dispatch(danh_sach_ti_vi_action(search))
    }
}

const connect_Tivi = connect(toStateFromValue,toDispatchFromFunction)(dsTivi_component)
export default connect_Tivi