export const logger = ({ getState }) => {
    return next => action => {
        const preState = getState()
        console.log('preState:', preState)
        const _action = next(action)
        const state = getState()
        console.log('state:', state)
        return _action
    }
}

export const thunk = ({ getState, dispatch }) => {
    return next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        }
        return next(action)
    }
}