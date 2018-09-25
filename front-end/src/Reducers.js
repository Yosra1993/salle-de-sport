
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
const PromotionEventReducer = (state = [], action) => {
    switch(action.type) {
        case "UPDATE_PROMOTION_EVENT_LIST":
      return (state = action.PromotionEvent);
        case "ADD_PROMOTION/EVENT":
      return state.concat(action.new_PromotionEvent);
      case "EDIT_PROMOTION/EVENT":
      return state.map(
        e =>
          e._id === action.editedPromotionEvent._id ? (e = action.editedPromotionEvent) : e
      );
    case "REMOVE__PROMOTION/EVENT":
      return state.filter(e => e._id !== action.id);
        default : 
        return state
    }
}

const Reducers = combineReducers({UserReducer,PromotionEventReducer})

export default Reducers