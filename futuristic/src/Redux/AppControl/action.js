
import * as types from "./action.types"
import axios from "axios"
const getJob= (params)=>(dispatch)=>{
  console.log("inside action",params)
  dispatch({ type: types.GET_JOB_REQUEST})
  return axios.get("http://localhost:8081/jobs",params)
  .then((r)=>{
   
   dispatch({ type: types.GET_JOB_SUCCESS, payload:r.data})
  })
  .catch((e)=>{
    dispatch({ type: types.GET_JOB_FAILURE, payload:e})
  })
  
}
export{ getJob}