// import { createStore, applyMiddleware } from 'redux'
// import logger from "redux-logger"
// import thunk from "redux-thunk" 
import { createStore, applyMiddleware } from '../my-redux'
import { logger, thunk } from '../my-redux/middlewares'
import reducer from './ruducer'

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store