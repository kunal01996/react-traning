import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const enhancerList = []
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__

if (typeof devToolsExtension === 'function' && process.env.REACT_APP_ENV !== 'production') {
  enhancerList.push(devToolsExtension())
}

const middlewares = [
  thunk
]

const composedEnhancer = compose(applyMiddleware(...middlewares), ...enhancerList)

const initStore = () => createStore(rootReducer, {}, composedEnhancer)

export default initStore
