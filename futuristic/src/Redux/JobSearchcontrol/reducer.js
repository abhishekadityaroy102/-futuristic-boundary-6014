import * as types from "./actiontype"
const initialstate={
    job_title:"",
    location:"",
    experience:""
}
export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case types.SET_DATA_REQUEST:{
            return state
        }
        case types.SET_DATA_SUCCESS:{
            return {
            ...state,job_title:payload.job_title,location:payload.location,experience:payload.experience
            }
        }
        default :return state
    }
}