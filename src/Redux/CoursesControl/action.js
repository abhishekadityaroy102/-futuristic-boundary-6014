import axios from "axios"
import * as types from "./action.types"
export const getCourse=()=>dispatch=>{
    dispatch({type:types.GET_COURSE_REQUEST})
    return axios.get("https://6333cb88433198e79dc9559d.mockapi.io/courses").then((r)=>{
        dispatch({type:types.GET_COURSE_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.GET_COURSE_FAIL})
    })
}