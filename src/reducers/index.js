import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import userAuth from "./userAuth";

export default combineReducers({
    userAuth,
    users,
    questions
})