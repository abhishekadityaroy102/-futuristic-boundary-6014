import * as types from "./action.types"
const initialstate={
  isLoading:false,
  isError:false,
     cartdata:[]
}
export const reducer=(state=initialstate,{type,payload})=>{
      switch(type){
        case types.GET_ADDTOCART_REQUEST:{
          return {
            ...state,isLoading:true
          }
        }
        case types.GET_ADDTOCART_SUCCESS:{
          return {
            ...state,cartdata:[payload,...state.cartdata],isLoading:false
          }
        }
        case types.GET_ADDTOCART_FAIL:{
          return {
            ...state,isError:true
          }
        }
        case types.DELETE_ADDTOCART_SUCCESS:{
          const newdata=state.cartdata.filter((el)=>{
            return el.id!=payload
          })
          return {
          ...state,cartdata:newdata
          }
        }
        case types.DELETE_ADDTOCART_FAIL:{
          return state
        }
        default:return state
      }
}