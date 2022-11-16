import axios from "axios";
import { useEffect,useState } from "react";

// feedback:fp02_102     - Mock data should be moved out of component
export const locationdata=["Bangalore","Kerela","Barh","Noida","Bihar","Karnatka"]
export const experiencedata=["0 years","0 to 1years","1 to 4 years","3 years","4 years","5 years","6 years","7 years","8 years","9 years","10 years+"]
export const useQuerydata=(query)=>{
    const [data,setdata]=useState([]);
    const getdata=async (query)=>{
    let res=await axios.get(`https://6333deaa433198e79dca824b.mockapi.io/Shine?search=${query}`)
    return  setdata(res.data)
    }
  

   useEffect(()=>{
    let timeid
    if(query){
        timeid=setTimeout(()=>getdata(query),300)
    }
    return ()=>clearTimeout(timeid)
   },[query])
   return {data}
}
