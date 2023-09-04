import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./styles.css";
import { auth } from "./fierbase";
function SingIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
   
  const validate=()=>
  {
    if(formData.name===""||formData.email===""||formData.password==="")
    {
      alert("give full detail")
    }
  }

  const nev=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,formData.email,formData.password)
    .then((res)=>{
      const user=res.user;
      updateProfile(user,{displayName:formData.name});
      console.log(res)
      nev("/")
    })
    .catch((err)=>
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      console.log(err)
    }
    )
    // console.log("Form data submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                SingIn page
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>User Name:</label>
                    <input
                      placeholder="Enter UserName"
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address:</label>
                    <input
                      placeholder="Enter Email"
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="btn btn-primary w-100 mt-3" onClick={handleSubmit}>Sign In</div>
                  <br />
                  <div className="text-center mt-3">
                    <Link to="/">You have an account ? Go for Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
