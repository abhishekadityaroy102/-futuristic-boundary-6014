import React, { useEffect, useRef, useState } from 'react'
import CoursesBox from '../Courses/CoursesBox'
import axios from "axios"
import styles from "./Courseside.module.css"
import {useNavigate} from "react-router-dom"
import {GrCaretPrevious,GrCaretNext} from "react-icons/gr"
import { Box, Divider, Text } from '@chakra-ui/react'
const Courseside = () => {
    const ref=useRef(null)
    const navigate=useNavigate()
    const [coursedata,setcoursedata]=useState([])
   
    const scroll=(scrollset)=>{
        ref.current.scrollLeft+=scrollset
    }
    const getcourseHome=()=>{
        return axios.get("https://6333cb88433198e79dc9559d.mockapi.io/courses?page=1&limit=7")
    }
    useEffect(()=>{
        getcourseHome().then((r)=>setcoursedata(r.data))
    },[])
  return (
    <div className={styles.coursesidewrap}>
        <Text fontSize="3xl" fontWeight="bold">Courses</Text>
        <Divider/>
        <div className={styles.courseboxwrap}>

     <div className={styles.Scroll_prev} onClick={()=>scroll(-500)}>
     <GrCaretPrevious fontSize="40px"/></div>  
        <div ref={ref} className={styles.courseslidebox}>
            {
            coursedata.length>0&&coursedata.map((el)=><CoursesBox data={el}/>)
            }
        </div>
        <div className={styles.Scroll_next} onClick={()=>scroll(500)}>
        <GrCaretNext fontSize="40px"/>
        </div>
        </div>
        <Box as="button" onClick={()=>navigate("/courses")}>
            <Text fontWeight="bold" color="#8652ff">View All</Text>
        </Box>
        <Divider/>
    </div>
  )
}

export default Courseside