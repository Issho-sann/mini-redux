// import { combineReducers } from 'redux'
import { combineReducers } from '../my-redux'

export function countReducer(state = 0, {type, payload = 1}) {
    switch (type) {
        case 'ADD':
            return state + payload
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}

export function caseReducer(state = '', {type}) {
    switch (type) {
        case 'LOWERCASE':
            return state.toLowerCase()
        case 'UPPERCASE':
            return state.toUpperCase()
        default:
            return state
    }
}

export default combineReducers({
    countReducer,
    caseReducer
})