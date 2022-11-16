import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginaction } from "../../Redux/Authentication/action";


// feedback: fw19_0506, fp03_266, fp02_102 - don't use encode image in src instead use blob urls 
// Remove commented code
// classname should be more descriptive
// code should be properly formatted
export default function Login() {
    let navigate = useNavigate();
    const location=useLocation()
    console.log(location.state)
    const dispatch=useDispatch()
    const [data, setData] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // let getData = async () => {
    //     let res = await fetch("https://postdata-rest-api.herokuapp.com/post");
    //     let res_data = await res.json();
    //     setData(res_data);
    // };
    // useEffect(() => {
    //     getData();
    // }, []);


    let handlesubmit = (e) => {
        e.preventDefault()
        dispatch(loginaction(email,password)).then(()=>{
           return  navigate("/")
        })
        // data.map((e) => {
        //     if (email == e.email && password == e.pass) {
        //         navigate("/");
        //         alert("Login successful");
        //     }
        // });
    };

    const handlego=()=>{
        navigate("/signup");
    }

    return (
        
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"60%",margin:"auto",marginTop:"150px"}}>

        <div style={{display:"flex",width:"100%",margin:"auto" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
       
       <div style={{width:"50%",border:"1px solid black" ,height:"400px", borderBottom:"0px",borderLeft:"0px",borderTop:"0px"}}>

            <h1
                style={{
                    color: "#050505",
                    fontSize: "2rem",
                    marginRight:"56%",
                    marginBottom: "2rem",
                    fontWeight: "bold",
                }}
            >
                Sign-in
            </h1>
            <div
                className="container"
            >
                <form onSubmit={handlesubmit}>
                    <div className="mb-4">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            style={{ 
                            width:"90%" ,
                            // marginRight:'33%',
                            marginBottom:"30px",
                            height:"30px"
                            
                        }}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            style={{  width:"90%" ,
                            marginBottom:"30px",
                            height:"30px"}}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                        <br />
                        <div style={{display:"flex"}}>
                        <div style={{width:"50%"}}>
                         <input style={{
                            marginRight:"85%"
                         }} type="checkbox"  /><p style={{
                            marginRight:"15%",
                            marginTop:"-23px"
                         }}>Keep me signed in</p>

                         </div> 

                         <div><p style={{ marginTop:"-3px",marginLeft:"88px",color:"purple",cursor:"pointer"}}>Forget Password</p></div>

                         </div>




                    </div>
                    <button
                        // onClick={handleSubmit}
                        type="submit"
                        className="btn btn-dark"
                        style={{
                           
                            width:"90%" ,
                            marginBottom:"7px",
                            height:"30px",
                            fontSize: "1.2rem",
                            color:"white",
                            border:"1px solid blue"
                            ,backgroundColor:"purple"
                        }}
                    >
                        LOGIN
                    </button>

                    <h3
                    style={{
                        marginLeft:"-2%",
                        marginTop:"1px"
                    }}
                    >-or-</h3>

{/* Login-otp */}
                    <button
                        // onClick={handleSubmit}
                        type="submit"
                        className="btn btn-dark"
                        style={{
                           
                            width:"90%" ,
                            marginBottom:"30px",
                            height:"30px",
                            fontSize: "1.2rem",
                            color:"blue",
                            border:"1px solid blue"
                        }}
                    >
                        Login via OTP
                    </button>
                </form>
            </div>

            </div>


{/* no-2 */}

            <div style={{height:"400px",width:"50%"}}>
            <div style={{ display:'flex',boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" ,width:"80%",margin:"auto",marginTop:"70px",marginBottom:"-35px"}} >
                
                        <img style={{
                            width:"50px",
                            height:"40px"
                            ,marginLeft:"30px",
                            marginRight:"20px"
                            ,marginTop:"7px",
                            cursor:"pointer"
                           
                        }} src="data:image/png;base64,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"alt=""/>
                        <p style={{ fontSize: "1.3rem",marginTop:"10px",cursor:"pointer"}}>Sign-in with Google</p>
                    </div>


                    <div style={{ display:'flex',boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"80%",margin:"auto",marginTop:"70px",marginBottom:"-35px"}} >
                    <img style={{
                            width:"50px",
                            height:"40px"
                            ,marginLeft:"30px",
                            marginRight:"20px"
                            ,marginTop:"7px",
                            cursor:"pointer"
                           
                        }} 
                        src="data:image/png;base64,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"alt=""/>
                        <p style={{ fontSize: "1.3rem",marginTop:"10px",cursor:"pointer"}}>Sign-in with Linkedin</p>
                    </div>


                    <div style={{ display:'flex',boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"80%",margin:"auto",marginTop:"70px"}} >
                    <img style={{
                            width:"50px",
                            height:"40px"
                            ,marginLeft:"30px",
                            marginRight:"20px"
                            ,marginTop:"7px",
                            cursor:"pointer"
                           
                        }}
                         src="https://icon-library.com/images/facebook-svg-icon/facebook-svg-icon-29.jpg"alt=""/>
                        <p style={{ fontSize: "1.3rem",marginTop:"10px",cursor:"pointer"}}>Sign-in with Facebook</p>
                    </div>
            </div>
            
            </div>

            <div style={{display:"flex",width:"60%",margin:"auto"}} >
                <div><h3>Don't have Shine account?</h3></div>
                <div><button
                onClick={handlego}
                style={{
                    border:"2px solid black",
                    padding:"7px",
                    color:"white",
                    marginTop:"16px",
                    marginLeft:"25px"
                    ,backgroundColor:"purple",
                    }}>Register now</button></div>
            </div>
           
            </div>
    );
}
