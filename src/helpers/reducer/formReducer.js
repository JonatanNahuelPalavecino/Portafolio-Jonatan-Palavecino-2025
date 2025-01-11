

const formReducer = (initialState, action) => {
    switch(action.type) {
        case "update":
            return {
                ...initialState,
                [action.payload.key]: action.payload.value
            }
        case "reset":
            return action.payload
        default:
            return initialState
    }
}

export default formReducer
