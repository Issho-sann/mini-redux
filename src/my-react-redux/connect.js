import React, { useContext, useReducer, useLayoutEffect } from 'react'
import { StoreContext } from './context'
import { bindActionCreators } from '../my-redux'

export default function connect(mapStateToProps, mapDispatchToProps) {
    return Comp => props => {
        const store = useContext(StoreContext)
        const { dispatch, getState, subscribe } = store
        const stateProps = mapStateToProps(getState())
        let dispatchProps = { dispatch }
        if (typeof mapDispatchToProps === 'function') {
            dispatchProps = mapDispatchToProps(dispatch)
        } else if (typeof mapDispatchToProps === 'object') {
            dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
        }
        const [, forceUpdate] = useReducer(x => x + 1, 0)
        useLayoutEffect(() => {
            const unsubscribe = subscribe(() => {
                forceUpdate()
            })
            return () => {
                if (unsubscribe) {
                    unsubscribe()
                }
            }
        }, [subscribe])
        return <Comp {...props} {...stateProps} {...dispatchProps}/>
    }
}