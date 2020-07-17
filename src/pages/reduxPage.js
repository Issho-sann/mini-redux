import React from 'react'
import store from '../store'

export default class ReduxPage extends React.Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }
    add = () => {
        store.dispatch({ type: 'ADD' })
    }
    minus = () => {
        store.dispatch({ type: 'MINUS' })
    }
    asyAdd = () => {
        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
                dispatch({ type: 'ADD', payload: 5 })
            }, 1000)
        })
    }
    render() {
        return (
            <>
                <h3>ReduxPage</h3>
                <p>{store.getState().countReducer}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyAdd}>asyAdd</button>
            </>
        )
    }
}