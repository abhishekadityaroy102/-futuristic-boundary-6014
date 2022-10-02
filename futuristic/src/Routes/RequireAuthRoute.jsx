import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
const RequireAuthRoute = ({children}) => {
    const location=useLocation()
    const {isAuth}=useSelector((state)=>state.Authreducer)
    if(isAuth){
        return (children)
    }
    else{
        return <Navigate to ="/login" state={location.path}></Navigate>
    }
  
}

export default RequireAuthRoute