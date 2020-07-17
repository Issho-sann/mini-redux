import React, { useReducer, useLayoutEffect, useEffect } from 'react'
import { countReducer } from '../store/ruducer'

const init = initArg => +initArg

export default function HooksPage() {
    const [state, dispatch] = useReducer(countReducer, '0', init)
    useEffect(() => {
        console.log(state)
        console.log('effect')
    })
    useLayoutEffect(() => {
        console.log('layoutEffect')
    })
    return (
        <div>
            <h3>HooksPage</h3>
            <p>{state}</p>
            <button onClick={() => dispatch({type: "ADD"})}>add</button>
            <button onClick={() => dispatch({type: 'MINUS'})}>minus</button>
        </div>
    )
}