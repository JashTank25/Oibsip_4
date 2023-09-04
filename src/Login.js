import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fierbase";
function Login() {
  const [formData, setFormData] = useState({
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

  const nev=useNavigate();
  const handleSubmit = (e) => {
    signInWithEmailAndPassword(auth,formData.email,formData.password)
    .then(async(res)=>{
      nev("/home")
    })
    .catch((res)=>
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })

    // e.preventDefault();
    // console.log("Form data submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                Login
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
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
                  <div className="btn btn-primary w-100 mt-3" onClick={handleSubmit}>Login</div>
                  <br />
                  <div className="text-center mt-3">
                    <Link to="/signin">
                      You don't have an account ? Sign you up
                    </Link>
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

export default Login;
