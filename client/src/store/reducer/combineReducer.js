import { combineReducers } from "redux";
import { counterReducer, minuscounterReucer, pluscounterReducer} from "./counterReducer";
import { getUserReducer } from "./getUserReducer";

const combineReducer = combineReducers({
    counterReducer : counterReducer,
    getUserReducer : getUserReducer
    // pluscounterReducer : pluscounterReducer,
    // minuscounterReucer : minuscounterReucer,
   
})
export default combineReducer
