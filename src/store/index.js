// import { createStore, applyMiddleware } from 'redux'
// import logger from "redux-logger"
// import thunk from "redux-thunk" 
// import { createStore, applyMiddleware } from '../mini-redux'
// import { logger, thunk } from '../mini-redux/middlewares'
import { createStore, applyMiddleware } from '../my-redux'
import { logger, thunk } from '../my-redux/middlewares'
import countReducer from './ruducer'

const store = createStore(countReducer, applyMiddleware(logger, thunk))

export default store