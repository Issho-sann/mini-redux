export default function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let curState
    let listeners = []

    dispatch({ type: 'xxx' })

    function getState() {
        return curState
    }
    function dispatch(action) {
        curState = reducer(curState, action)
        listeners.map(listener => listener())
        return action
    }
    function subscribe(listener) {
        listeners.push(listener)
        return () => {
            listeners = []
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}