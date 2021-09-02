import CartReducer from "./CartReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    CartReducer: CartReducer
});
export default rootReducer;