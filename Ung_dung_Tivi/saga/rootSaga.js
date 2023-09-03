import dsTivi from './dsTivi_saga'
import { all } from 'redux-saga/effects'
export default function* rootSaga() {
    yield all([
        dsTivi()
    ])
  }