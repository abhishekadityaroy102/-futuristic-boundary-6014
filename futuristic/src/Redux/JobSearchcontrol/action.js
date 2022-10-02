import * as types from "./actiontype";
export const setdata=(pay)=>dispatch=>{
    dispatch({type:types.SET_DATA_REQUEST});
    dispatch({type:types.SET_DATA_SUCCESS,payload:pay});
    
}