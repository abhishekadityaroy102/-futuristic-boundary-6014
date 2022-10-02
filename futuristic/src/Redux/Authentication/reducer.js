import * as types from "./action.types"
const initialstate={
  isAuth:false,
  isLoading:false,
  isError:false
}
export const reducer=(state=initialstate,{type,payload})=>{
      switch(type){
        case types.GET_LOGIN_REQUEST:{
          return state
        }
        case types.GET_LOGIN_SUCCESS:{
          console.log(payload)
          return {
            ...state,isAuth:true
          }
        }
        case types.GET_LOGIN_FAILURE:{
          return {
            ...state,isError:true,isAuth:false
          }
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