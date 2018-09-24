
import {combineReducers} from 'redux'
import * as users from './data/user'
const UserReducer = (state = "", action) => {
    switch(action.type) {
        case  "LOG_IN" :
        return( action.userProfile.email === users.admin.email ? "admin" : "user")
        case "LOG_OUT" : 
        return ""
        default : 
        return state
    }
}
const AddPromotionEventReducer = (state = "", action) => {
    switch(action.type) {
        case "ADD_PROMOTION/EVENT":
      return state.concat(action.newPromotion_event);
        default : 
        return state
    }
}

const Reducers = combineReducers({UserReducer,AddPromotionEventReducer})

export default Reducers