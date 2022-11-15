import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import * as types from "./action.types"
export const getaddtocart=(id)=>dispatch=>{
    dispatch({type:types.GET_ADDTOCART_REQUEST})
    return axios.get(`https://6333cb88433198e79dc9559d.mockapi.io/courses/${id}`).then((r)=>{
        return dispatch({type:types.GET_ADDTOCART_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_ADDTOCART_FAIL})
    })
}
export const deleteaddtocart=(id)=>dispatch=>{
    dispatch({type:types.DELETE_ADDTOCART_SUCCESS,payload:id})
}