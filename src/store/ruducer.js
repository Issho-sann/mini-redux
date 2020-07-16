function countReducer(state = 0, {type, payload = 1}) {
    switch (type) {
        case 'ADD':
            return state + payload
        case 'MINUS':
            return state - 1
        default:
            return state
    }

}

export default countReducer