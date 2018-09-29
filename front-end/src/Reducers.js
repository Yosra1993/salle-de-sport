
import {combineReducers} from 'redux'
import * as users from './data/user'
import salleDeSportData from './data/salle-de-sport-Data'
import dataprofilgym from './data/profilgymEdit'
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
      return state.map(e =>e._id === action.editedPromotionEvent._id ? (e = action.editedPromotionEvent) : e);
    case "REMOVE__PROMOTION/EVENT":
      return state.filter(e => e._id !== action.id);
        default : 
        return state
    }
}

const PromotionEventuserReducer = (state = [], action) => {
  switch(action.type) {
      case "UPDATE_PROMOTION_EVENT_LISTUSER":
    return (state = action.PromotionEventuser);
      case "ADD_PROMOTION/EVENTU-SER":
    return state.concat(action.new_PromotionEventuser);
    default :
      return state
  }
}

const ProfilGYM_Reducer = (state = dataprofilgym, action) => {
  switch(action.type) {
    case "ADD_PROFIL_GYM":
      return (state = action.gym);
    case "EDIT_PROFIL_GYM":
      return state.map(e =>e._id === action.editedPrfilGym._id ? (e = action.editedPrfilGym) : e);
    default : 
        return state
    }
}
const add_salle_sportReducer = (state=salleDeSportData, action) => {
  switch(action.type) {
      case "ADD_SALLE_DE_SPORT":
      return (state = action.Sport);
      default :
      return state
  }
}

const SearchReducer = (state='', action) => {
  switch(action.type) {
      case "SET_NAMEGYM_FILTER":
      return (state = action.NomSalledeSport);
      default :
      return state
  }
}
const LieuSearchReducer = (state='', action) => {
  switch(action.type) {
      case "SET_LIEU_FILTER":
      return (state = action.lieu);
      default :
      return state
  }
}

const CoursesSearchReducer = (state='', action) => {
  switch(action.type) {
      case "SET_COURSE_FILTER":
      return (state = action.courses);
      default :
      return state
  }
}

const TypesSearchReducer = (state='', action) => {
  switch(action.type) {
      case "SET_TYPEPROMO_FILTER":
      return (state = action.typepromo);
      default :
      return state
  }
}

const Reducers = combineReducers({UserReducer,PromotionEventReducer,
  ProfilGYM_Reducer,SearchReducer,add_salle_sportReducer,LieuSearchReducer,CoursesSearchReducer
,TypesSearchReducer,PromotionEventuserReducer})

export default Reducers