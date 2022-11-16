import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("");
  const [mobile, setMobile] = useState("");
  const [skill, setSkills] = useState("");

  const navigate = useNavigate();

  // feedback: fw19_0506, fp03_266, fp02_102 - don't use URLS direclty into the view
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("https://postdata-rest-api.herokuapp.com/post", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        pass: password,
        mobile: mobile,
        location: location,
        qualification: qualification,
        skill: skill,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    alert("Register Successfull");
    navigate("/login");
  };


  return (
    <div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          width: "100%",
          height: "80px",
        }}
      >
        <img
          style={{ height: "70px", marginLeft: "-80%" }}
          src="https://seeklogo.com/images/S/shine-com-logo-F03D4F3C8B-seeklogo.com.png"
          alt=""
        />
      </div>

      <div
        style={{
          width: "70rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          marginTop: "30PX",
        }}
      >
        <h1
          style={{
            color: "#050505",
            fontSize: "2rem",
            marginTop: "1rem",
            marginBottom: "2rem",
            fontWeight: "bold",
            marginLeft: "-275px",
          }}
        >
          Register Now
        </h1>

        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "600px",
            margin: "auto",
            marginBottom: "20px",
            backgroundColor: "purple",
            padding: "9px",
            color: "white",
            marginLeft: "100px",
            cursor: "pointer",
          }}
        >
          <form action="">
            <input id="f02" type="file" placeholder="Uplode Resume" />
            <label for="f02">Uplode Resume for Autofill by Resume</label>
          </form>
        </div>

        <div
          style={{
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderBottom: "0PX",
          }}
        >
          <div
            className="container"
            style={{
              width: "50rem",
              // border: "1px solid red",
              padding: "1rem",
              marginTop: "-20px",
            }}
          >
            <form>
              <p style={{ maerginTop: "10px" }}>
                -----or Register Manually-----
              </p>
              <div className="mb-4" style={{ display: "flex" }}>
                <input
                  type="name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  style={{
                    padding: "1rem",
                    width: "20rem",
                    marginLeft: "20px",
                    marginRight: "40px",
                    height: "16px",
                  }}
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  required
                />

                <div className="mb-4">
                  <input
                    type="number"
                    onChange={(event) => setMobile(event.target.value)}
                    value={mobile}
                    style={{ padding: "1rem", width: "20rem" }}
                    className="form-control"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
              </div>

              <div
                className="mb-4"
                style={{ display: "flex", marginTop: "20px" }}
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  style={{
                    padding: "1rem",
                    width: "20rem",
                    marginLeft: "20px",
                    marginRight: "40px",
                    height: "16px",
                  }}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  required
                />
                <div className="mb-4">
                  <input
                    type="text"
                    onChange={(event) => setLocation(event.target.value)}
                    value={location}
                    style={{ padding: "1rem", width: "20rem" }}
                    className="form-control"
                    placeholder="Location"
                    required
                  />
                </div>
              </div>

              <div
                className="mb-4"
                style={{ display: "flex", marginTop: "20px" }}
              >
                <input
                  type="text"
                  onChange={(event) => setQualification(event.target.value)}
                  value={qualification}
                  style={{
                    padding: "1rem",
                    width: "20rem",
                    marginLeft: "20px",
                    marginRight: "40px",
                    height: "16px",
                  }}
                  className="form-control"
                  placeholder="Qualification"
                  required
                />
                <div className="mb-4">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    style={{ padding: "1rem", width: "20rem" }}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div
                className="mb-4"
                style={{ display: "flex", marginTop: "20px" }}
              >
                <input
                  type="text"
                  onChange={(event) => setSkills(event.target.value)}
                  value={skill}
                  style={{
                    padding: "1rem",
                    width: "45rem",
                    marginLeft: "20px",
                    marginBottom: "20px",
                    height: "16px",
                  }}
                  className="form-control"
                  placeholder="Skills"
                  required
                />
              </div>

              <div
                style={{
                  border: "1px solid black",
                  width: "400px",
                  margin: "auto",
                  marginBottom: "20px",
                  backgroundColor: "purple",
                  padding: "9px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <form action="">
                  <input id="f02" type="file" placeholder="Uplode Resume" />
                  <label for="f02">Uplode Resume</label>
                </form>
              </div>

              <div style={{ height: "10px" }}>
                <input
                  style={{ marginRight: "90%" }}
                  type="checkbox"
                  required
                />
                <p
                  style={{
                    height: "10px",
                    marginTop: "-23px",
                    marginLeft: "-90px",
                  }}
                >
                  I agree to Terms & Conditions and Privacy policy & Receive
                  jobs notifications
                </p>
              </div>
              <br />

              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-dark"
                style={{
                  width: "10rem",
                  margin: "auto",
                  padding: "1rem",
                  fontSize: "1.2rem",
                  backgroundColor: "purple",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Register
              </button>
            </form>
          </div>

          <div
            style={{
              width: "100%",
            }}
          >
            <img
              style={{ width: "160px", cursor: "pointer", marginTop: "40px" }}
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              style={{
                width: "160px",
                cursor: "pointer",
                height: "77px",
                marginTop: "40px",
              }}
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              style={{
                width: "160px",
                cursor: "pointer",
                height: "70px",
                marginTop: "40px",
              }}
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
