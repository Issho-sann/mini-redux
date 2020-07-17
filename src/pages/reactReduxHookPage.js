import React, { useCallback } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch, useSelector } from '../my-react-redux'

export default function ReactReduxHookPage() {
    const dispatch = useDispatch()
    const add = useCallback(() => dispatch({ type: 'ADD' }), [dispatch])
    const count = useSelector(({countReducer}) => countReducer)
    return (
        <div>
            <h3>ReactReduxHookPage</h3>
            <p>{count}</p>
            <button onClick={add}>add</button>
        </div>
    )
}