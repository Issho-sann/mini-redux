import React from 'react'
import { StoreContext } from './context'

export function useStore() {
    const store = React.useContext(StoreContext)
    return store
}

export function useDispatch() {
    const store = useStore()
    return store.dispatch
}

export function useSelector(selector) {
    const store = useStore()
    const { getState, subscribe } = store
    const selectedState = selector(getState())

    const [, forceUpdate] = React.useReducer(x => x + 1, 0)
    React.useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
            forceUpdate()
        })
        return () => {
            if (unsubscribe) {
                unsubscribe()
            }
        }
    }, [subscribe])

    return selectedState
}