
import * as types from "./action.types"
import axios from "axios"
const getJob= (payload)=>(dispatch)=>{

  dispatch({ type: types.GET_JOB_REQUEST})
  return axios.get("http://localhost:8080/jobs",payload)
  .then((r)=>{
   
   dispatch({ type: types.GET_JOB_SUCCESS, payload:r.data})
  })
  .catch((e)=>{
    dispatch({ type: types.GET_JOB_FAILURE, payload:e})
  })
  
}
export{ getJob}