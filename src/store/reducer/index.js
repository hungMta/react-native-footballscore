import { combineReducers } from "redux";
import competition from "./competition"
import fixtures from "./fixture";

export default combineReducers({
    competition, fixtures
})
