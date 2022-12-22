const { default: ActionTypes } = require("../constants")

const INITIAL_STATE = {
    data: [],
    dataLoading: false,
}



const getUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER_DATA_LOADING:

            return {
                ...state,
                dataLoading: true
            }
        case ActionTypes.GET_USER_DATA:
            // console.log(action.payload , " ");
            // console.log([...state, action.payload], "reducer wala");s
            return {
                 ...state,
                data: action.payload,
                dataLoading : false
             }


        default:
            return state
    }

}

export { getUserReducer }