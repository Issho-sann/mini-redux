import React from 'react'

export default function ReducePage() {
    function fn1(param) {
        console.log('fn1', param)
        return param
    }
    function fn2(param) {
        console.log('fn2', param)
        return param
    }
    function fn3(param) {
        console.log('fn3', param)
        return param
    }
    // fn1(fn2(fn3('reduce')))

    // let arr = [1, 2, 3, 4]
    // const sum = arr.reduce((next, cur) => {
    //     console.log(next, cur)
    //     return next + cur
    // })
    // console.log(sum)

    function compose(...fn) {
        return fn.reduce((next, cur) => {
            // console.log(next, cur)
            return (...arg) => {
                return next(cur(...arg))
            }
        })
    }
    compose(fn1, fn2, fn3)('reduce')

    return <></>
}