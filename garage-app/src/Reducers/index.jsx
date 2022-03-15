import { combineReducers } from "redux";
import blogForm from "./blogForm";

const allReducers=combineReducers({
    blogForm:blogForm
});
export default allReducers;