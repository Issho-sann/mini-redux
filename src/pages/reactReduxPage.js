import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import { bindActionCreators } from '../my-redux'
import { connect } from '../my-react-redux'

const mapStateToProps = state => ({num: state})
// const mapDispatchToProps = {
//     add: () => ({ type: 'ADD' }),
//     minus: () => ({ type: 'MINUS' }),
//     asyAdd: () => (async dispatch => {
//         await new Promise(reslove => setTimeout(reslove, 1000))
//         return dispatch({ type: 'ADD', payload: 5 })
//     })
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         add: () => dispatch({ type: 'ADD' }),
//         minus: () => dispatch({ type: 'MINUS' }),
        // asyAdd: () => {
        //     setTimeout(() => {
        //         dispatch({ type: 'ADD', payload: 5 })
        //     }, 1000)
        // }
//     }
// }
const mapDispatchToProps = dispatch => {
    let creators = {
        add: () => ({ type: 'ADD' }),
        minus: () => ({ type: 'MINUS' }),
        asyAdd: () => (async dispatch => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return dispatch({ type: 'ADD' })
        })
    }
    creators = bindActionCreators(creators, dispatch)
    return {
        dispatch,
        ...creators
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class ReactReduxPage extends React.Component {
    render() {
        const { num, add, minus, asyAdd } = this.props;
        console.log(this.props)
        return (
            <div>
                <h1>ReactReduxPage</h1>
                <p>{num}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={asyAdd}>asyAdd</button>
            </div>
        )
    }
})