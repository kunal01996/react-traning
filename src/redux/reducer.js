import Immutable from 'immutable'
import {
  SET_API_STATUS,
  SET_DATA,
  SET_ERROR
} from './action-names'

const initState = Immutable.fromJS({
  status: 'UNINIT',
  error: '',
  data: []
})

const reducer = (state = initState, action) => {

  switch (action.type) {
    case SET_API_STATUS:
      return state.withMutations((st) => {
        st.set('status', action.payload)
      })
    case SET_DATA:
      return state.withMutations((st) => {
        st.set('data', action.payload)
      })
    case SET_ERROR:
      return state.withMutations((st) => {
        st.set('error', action.payload)
      })
    default:
      return state
  }

}

export default reducer
