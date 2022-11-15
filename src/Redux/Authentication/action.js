import axios from "axios";
import * as types from "./action.types";
export const logoutaction=()=>dispatch=>{
    dispatch({type:types.GET_LOGOUT_REQUEST});
    dispatch({type:types.GET_LOGOUT_SUCCESS});
    dispatch({type:types.GET_LOGIN_FAILURE})
}
export const loginaction=(useremail,userpassword)=>dispatch=>{
    
    dispatch({type:types.GET_LOGIN_REQUEST});
    return axios.get("https://postdata-rest-api.herokuapp.com/post").then((r)=>{
      r.data.map((el)=>{
        if(el.email==useremail&&el.pass==userpassword){
            console.log(el)
           return  dispatch({type:types.GET_LOGIN_SUCCESS,payload:el})
        }
        else{
           return  dispatch({type:types.GET_LOGIN_FAILURE})
        }
      })
    })
}