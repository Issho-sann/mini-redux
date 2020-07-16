export default function applyMiddleware(...middlewares) {
    return createStore => reducer => {
        let { getState, dispatch, subscribe } = createStore(reducer)

        const midApi = {
            getState,
            dispatch: (action, ...args) => dispatch(action, ...args)
        }

        const middlewareChain = middlewares.map(middleware => middleware(midApi))

        dispatch = compose(middlewareChain)(dispatch)

        return {
            getState,
            dispatch,
            subscribe
        }
    }
}

function compose(fn) {
    return fn.reduce((next, cur) => (...args) => next(cur(...args)))
}