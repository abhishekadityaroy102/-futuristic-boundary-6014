

import * as types from "./action.types"

const initialstate={
  data:"",
  jobs: [],
  isLoading: false,
  isError: false,

}
const reducer=(state=initialstate,action)=>{
  const {type,payload}=action;
      switch(type){

        case  types.GET_JOB_REQUEST:
          return {
            ...state,
            isLoading:true,
            isError:false,
          }
          case  types.GET_JOB_SUCCESS:
          return {
            ...state,
            jobs:payload,
            isLoading:false,
            isError:false,
          }
          case  types.GET_JOB_FAILURE:
            return {
              ...state,
              isLoading:false,
              isError:true,
            }
  


        default:return state
      }
}

export { reducer}