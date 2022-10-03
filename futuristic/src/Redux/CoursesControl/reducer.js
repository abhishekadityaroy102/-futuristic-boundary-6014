import * as types from "./action.types"
const initialstate={
course_data:[],
isLoading:false,
isError:false
}
export const reducer=(state=initialstate,{type,payload})=>{
      switch(type){
        case types.GET_COURSE_REQUEST:{
          return {
            ...state,isLoading:true
          }
        }
        case types.GET_COURSE_SUCCESS:{
          return {
            ...state,course_data:payload,isLoading:false
          }
        }
        case types.GET_COURSE_FAIL:{
          return {
            ...state,isError:true,course_data:[]
          }
        }
        default:return state
      }
}