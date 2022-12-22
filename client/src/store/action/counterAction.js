import ActionTypes from "../constants"

const counterPlusAction = (value) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.COUNTER_PLUS,
            payload: value,
        })
    }

}

const counterMinusAction = (value) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.COUNTER_MINUS,
            payload: value,
        })
    }
}
export {

    counterPlusAction, counterMinusAction
}
