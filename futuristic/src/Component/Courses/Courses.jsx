import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Footer from "../../Pages/Footer";
import { getCourse } from "../../Redux/CoursesControl/action";
import CoursesBox from "./CoursesBox";
import styles from "./Courses.module.css"
import { Box, Divider, Text } from "@chakra-ui/react";
const Courses = () => {
  const {course_data}=useSelector((state)=>state.Coursereducer)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(course_data.length==0){
      dispatch(getCourse())
    }
  },[])
    return (
    <div className={styles.coursesmainbox_wrap}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color="#8652ff">All Courses</Text>
      </Box>
      <Divider/>
      <div className={styles.coursesmain_wrap}>
        {
          course_data.length>0&&course_data.map((el)=><CoursesBox data={el}/>)
        }
      </div>
      <Divider/>
      <Footer />
    </div>
  );
};

export default Courses;
