import * as types from "./action.types"
const initialstate={
  isAuth:true
}
export const reducer=(state=initialstate,{type,payload})=>{
      switch(type){
        case types.GET_LOGIN_REQUEST:{
          return state
        }
        case types.GET_LOGIN_SUCCESS:{
          return state
        }
        case types.GET_LOGIN_FAILURE:{
          return state
        }
         case types.GET_LOGOUT_REQUEST:{
          return state
         }
         case types.GET_LOGOUT_SUCCESS:{
          return {
            ...state,isAuth:false
          }
         }
         case types.GET_LOGOUT_FAILURE:{
          return state
         }
        default:return state
      }
}