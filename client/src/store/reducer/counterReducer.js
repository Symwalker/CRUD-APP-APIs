import ActionTypes from "../constants"
const INITIAL_STATE = {
    counter : 0,
}


// reducer aapkay 2 parameter leita he pehla saari global satates or dosra parameter action jo dispatch ho kar aa ha he
const counterReducer = (state = INITIAL_STATE, action) => {
    if (action.type === ActionTypes.COUNTER_PLUS) {
        //for checking if the reducer is working or not
        // console.log("shayan");
        return {counter : ++state.counter,...state}
    }
    else if (action.type === ActionTypes.COUNTER_MINUS) {
        console.log("shayan")
        return {counter : --state.counter,...state}
    }
    else {
        return state
    }
}



// const pluscounterReducer = (state = INITIAL_STATE, action) => {
//     if (action.type === ActionTypes.COUNTER_PLUS) {
//         return {
//             counter : ++state.counter,
//             ...state,
//         }
//     }
//     else {
//         return state
//     }
// }

// const minuscounterReucer = (state = INITIAL_STATE, action)=>{
//     if(action.type === ActionTypes.COUNTER_MINUS){
//         console.log("shayan")
//         return  {
//             counter : --state.counter,
//             ...state,
//         }
//     }else{
//         return state
//     }
// }
// export { pluscounterReducer , minuscounterReucer}
export{
    counterReducer
    }
