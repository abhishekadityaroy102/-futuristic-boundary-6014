import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Profile(){
    const [data, setData] = useState([]);
    const {userdata}=useSelector((state)=>state.Authreducer);
    console.log("userdata from after login",userdata)
    let getData = async () => {
        let res = await fetch("https://postdata-rest-api.herokuapp.com/post");
        let res_data = await res.json();
        setData(res_data);
    };
    useEffect(() => {
        getData();
    }, []);

    return(
      <div style={{height:"auto",width:"100%"}}>
        <div>
        <div style={{display:"flex"}}>
        {/* frist */}
            <div style={{width:"70%"}}>
            {/* 1 */}

            <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",height:"250px",marginTop:"85px",width:"90%",marginLeft:"9%"}}>
                <div style={{display:"flex"}}>
                    <div style={{height:"150px",width:"50%",display:"flex"}}>
                        {/* profile div */}
                        <div style={{height:"100px",width:"20%",borderRadius:"50%",marginTop:"5%",marginLeft:"5%",border:"3px solid blue"}}>
                           <div ><img style={{height:"100px",width:"100%",borderRadius:"50%",}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==" alt="" /></div>
                        </div>

                        {/* profile details */}
                   <div style={{height:"150px",marginLeft:"15%",textAlign:"start"}}>

                   {userdata && 
                    <div >
                <h1 style={{color:"blue",marginBottom:"10px",marginTop:"10px"}}>{userdata.name || "Not mentioned"}</h1>
                <h3 style={{marginTop:"10px",marginBottom:"10px",color:"blue",cursor:"pointer"}}>{userdata.email || "Not mentioned"}</h3>
                <h3 style={{color:"blue"}}>{userdata.mobile || "Not mentioned"} <span style={{color:"black",fontSize:"14PX",cursor:"pointer"}} >verify </span></h3>
                    </div>
                }


                   </div>

                    </div>
                    <div style={{height:"150px",width:"50%"}}>
                        <img style={{height:"70%",marginLeft:"25%",marginTop:"5%"}} src="https://user-images.githubusercontent.com/104376252/193436892-6fef701b-adb9-4e41-ac7e-4cc37c72321a.png" alt="" />
                    </div>
                </div>
                <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",height:"100px",display:"flex"}}>
                <div style={{width:"50%"}}>  <input style={{marginLeft:"-60%",marginTop:"10%"}} type="checkbox" /><h5 style={{marginTop:"-4.2%"}}>Are you actively looking for a job? NEW</h5></div>
                <div style={{width:"50%"}}>  <input style={{marginLeft:"-60%",marginTop:"10%"}} type="checkbox" /><h5 style={{marginTop:"-4.2%"}}>Are you available for immediate joining?</h5></div>
                   
                </div>
            </div>

            {/* 2 resume */}
            <div style={{
            boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ,height:"200px",marginTop:"70px",width:"90%",marginLeft:"9%"}}>
            <h1 style={{marginRight:"82%",marginBottom:"40px"}}>Resume</h1>
            <h3 style={{marginRight:"66%",marginTop:"-20px"}}>Upload your updated resume</h3>
            <input style={{marginRight:"66%",padding:"15px"}} type="file" />
            <p style={{marginRight:"60%",marginTop:"-5px"}}>(.pdf, .doc, .docx, .csv, .rtf and .txt files only.)</p>


            </div>

            {/* 3 */}
            <div style={{ display:"flex",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",height:"auto",marginTop:"70px",width:"90%",marginLeft:"9%"}}>
            <div style={{ textAlign: "left",marginLeft:"5%",width:"30%",}}>
            <h1 style={{ marginBottom:"15PX"}}>Personal</h1>
            <h4 style={{marginBottom:"15px"}}>Name</h4>
            <h4 style={{marginBottom:"15px"}}>Email</h4>
            <h4 style={{marginBottom:"15px"}}>Mobile</h4>
            <h4 style={{marginBottom:"15px"}}>Location</h4>
            <h4 style={{marginBottom:"15px"}}>Date of birth</h4>
            <h4 style={{marginBottom:"15px"}}>Device you own</h4>
            </div>
            {/* rightdiv */}
            <div style={{ textAlign: "left",width:"65%",marginTop:"7%"}}>
                {/* data from api */}
                {userdata && 
                    <div >
                <p style={{marginBottom:"13px"}}>{userdata.name || "Not mentioned"}</p>
                <p style={{marginBottom:"13px"}}>{userdata.email || "Not mentioned"}</p>
                <p style={{marginBottom:"13px"}}>{userdata.mobile || "Not mentioned"}</p>
                <p style={{marginBottom:"13px"}}>{userdata.location || "Not mentioned"}</p>
                <p style={{marginBottom:"13px"}}>Not mentioned</p>
                    </div>
                }
                
            </div>
            
            </div>


            {/* 4 */}
            <div style={{ display:"flex",
            boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height:"auto",marginTop:"70px",width:"90%",marginLeft:"9%"}}>
            <div style={{ textAlign: "left",marginLeft:"5%",width:"30%",}}>
            <h1 style={{marginBottom:"15px"}}>Work Summary</h1>
            <h4 style={{marginBottom:"15px"}}>Profile Title</h4>
            <h4 style={{marginBottom:"15px"}}>Profile Summary</h4>
            <h4 style={{marginBottom:"15px"}}>Total Experience</h4>
            
            </div>
            {/* rightdiv */}
            <div style={{ textAlign: "left",width:"65%",marginTop:"6%"}}>
                {/* data from api */}
                <h4 style={{marginBottom:"15px"}}>Not mentioned</h4>
                <h4 style={{marginBottom:"15px"}}>Not mentioned</h4>
                <h4 style={{marginBottom:"15px"}}>0 Months</h4>
            </div>
            
            </div>
            
            {/* 5div */}
            <div style={{ display:"flex",
            boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height:"auto",marginTop:"50px",width:"90%",marginLeft:"9%"}}>
            <div style={{ textAlign: "left",marginLeft:"5%",width:"30%",marginBottom:"10PX"}}>
            <h1 style={{marginBottom:"20PX"}}>Education</h1>
            {userdata &&
                    <div >
                <h4>{userdata.qualification || "Not mentioned"}</h4>
               
                    </div>
                }
           
            </div>    
            </div>

            {/* 6div */}
{/*feeback: fp02_102, fw15_273, fp03_266: it seems almost similar heading, you can use loops to redner them by passing dynamic config*/}
            <div style={{ display:"flex",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",height:"auto",marginTop:"70px",width:"90%",marginLeft:"9%"}}>
            <div style={{ textAlign: "left",marginLeft:"5%",width:"40%",}}>
            <h1 style={{ marginBottom:"19PX"}}>Desired Job Details</h1>
            <h4 style={{ marginBottom:"15PX"}}>Job Role</h4>
            <h4 style={{ marginBottom:"15PX"}}>Job Location</h4>
            <h4 style={{ marginBottom:"15PX"}}>Department</h4>
            <h4 style={{ marginBottom:"15PX"}}>Industry</h4>
            <h4 style={{ marginBottom:"15PX"}}>Job Type</h4>
            <h4 style={{ marginBottom:"15PX"}}>Shift Type</h4>
            <h4 style={{ marginBottom:"15PX"}}>Salary</h4>
            </div>
            {/* rightdiv */}
            <div style={{ textAlign: "left",width:"65%",marginTop:"7%"}}>
                {/* data from api */}
                <h4 style={{ marginBottom:"15PX"}}>Not mentioned</h4>
                <h4 style={{ marginBottom:"15PX"}}>Not mentioned</h4>
                <h4 style={{ marginBottom:"15PX"}}>Not mentioned</h4>
                <h4 style={{ marginBottom:"15PX"}}>Not mentioned</h4>
                <h4 style={{ marginBottom:"15PX"}}>Not mentioned</h4>
                <h4 style={{ marginBottom:"15PX"}}>Not mentioned</h4>
                <h4 style={{ marginBottom:"15PX"}}>Not mentioned</h4>
            </div>
            
            </div>
            

            </div>

            {/* no2 */}
            <div style={{width:"30%",marginTop:"70px"}}>
                <img style={{width:"70%" ,cursor:"pointer"}} src="https://user-images.githubusercontent.com/104376252/193392989-edea0b8e-be4f-4adc-a19c-248833291464.png" alt="" />
                <img style={{width:"70%" ,cursor:"pointer"}} src="https://user-images.githubusercontent.com/104376252/193393041-c36cbd12-61d6-44e0-84b2-4309742bcd6c.png" alt="" />
            </div>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"50px"}}>
            <img style={{width:"100%",cursor:"pointer"}} src="https://user-images.githubusercontent.com/104376252/193395727-c684c299-823b-4985-9fa9-4fe25020c40d.png" alt="" />
        </div>
        </div>
        </div>
    )
}
