import * as types from "./action.types";
export const logoutaction=()=>dispatch=>{
    dispatch({type:types.GET_LOGOUT_REQUEST});
    dispatch({type:types.GET_LOGOUT_SUCCESS});
    dispatch({type:types.GET_LOGIN_FAILURE})
}