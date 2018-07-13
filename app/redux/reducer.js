import {combineReducers} from "redux"
import homeReducer from "./homeReducer"
import wcReducer from "./wcReducer"

const reducer = combineReducers({
    homeResult: homeReducer,
    wcResult: wcReducer
})

export default reducer;