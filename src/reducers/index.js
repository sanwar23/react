import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userRe: userReducer 
})

export default rootReducer;