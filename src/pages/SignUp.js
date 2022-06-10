import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      navigate("/login");
    } else {
      alert("This email already in use. Use a different email !!");
    }
  }
  return (
    <React.Fragment>
      <section className="sec-sign">
        <div className="signform">
          <div className="container h-100">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <form className="mx-1 mx-md-4" onSubmit={registerUser}>
                    <h2>Sign Up!!!</h2><br /><hr /><br />
                    <label className="form-label">Enter Name</label>
                    <input required type="text" name="name" className="form-control" value={name} 
                    onChange={(e) => setName(e.target.value)}/><br />
                    <label className="form-label">Enter Email</label>
                    <input required type="email" name="email" className="form-control" value={email} 
                    onChange={(e) => setEmail(e.target.value)}/><br />
                    <label className="form-label">Enter Password</label>
                    <input required type="password" name="password" className="form-control" value={password} 
                    onChange={(e) => setPassword(e.target.value)}/><br />
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="cancelbtn btn">Cancel</button>
                      <button type="submit" className="signbtn btn">SignUp</button>
                    </div>
                    <br /><hr /><br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default SignUp;
