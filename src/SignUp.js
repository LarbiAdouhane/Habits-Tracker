import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';



const SignUp = () => {
  const navigate = useNavigate();

  const iconStyle = {
    marginRight: '10px',
    fontSize: '20px',
  };
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    borderRadius: '5px',
    border: '1px solid rgb(0, 0, 0)',
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',

  };
  return (
    <div className="CONTAINER">
      <div className="formss">
        <h2>JOIN US NOW</h2>
        <div className="button">
          <button className="btn1" style={buttonStyle} >
            <FaGoogle style={iconStyle} />
            Sign in with Google
          </button>

        </div>
        <div>
          <form action="">
            <label for="name">Name :</label>
            <input className="form-control" type="name" name="name" required />
            <label for="email">Email :</label>
            <input className="form-control" type="email" name="email" required />
            <label for="passowrd">Password :</label>
            <input className="form-control" type="password" name="passowrd" required />
            <div className="footer">
                <span>vous avez deja un compte ? <a href=' ' onClick={() => navigate("/signin")}> Click here!</a> </span>
            </div>
            <button type="submit" className="btn-primary">Sign Up</button>

          </form></div>
      </div>
    </div>
  );

}
export default SignUp