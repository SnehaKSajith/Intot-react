import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/Dashboard";
    } else {
      alert("Please check your email and password");
    }
  }
  return (
    <React.Fragment>
        <section className="sec-log">
            <div className="logform">
                <div className="container h-100">
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                <form className="mx-1 mx-md-4" onSubmit={loginUser}>
                                    <h2>Login!!!</h2><br /><hr /><br />
                                    <label className="form-label">Enter Your Email</label>
                                    <input type="email" name="email" className="form-control" value={email} 
                                    onChange={(e) => setEmail(e.target.value)}/><br />
                                    <label className="form-label">Enter Your Password</label>
                                    <input type="password" name="password" className="form-control" value={password} 
                                    onChange={(e) => setPassword(e.target.value)}/>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" className="cancelbtn btn">Cancel</button>
                                        <button type="submit" className="signbtn btn">Login</button>
                                    </div>
                                    <br /><br /><hr /><br /><br /><br /><br />
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

export default Login;
