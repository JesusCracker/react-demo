import counter from "./counter";
import user from "./user";
import {combineReducers} from "redux";

 const rootReducers=combineReducers({
    counter,
    user
});
 export default rootReducers;