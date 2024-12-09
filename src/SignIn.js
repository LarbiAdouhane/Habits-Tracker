import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';



const SignIn = () => {
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


          <form action="">
            <label for="email">Email :</label>
            <input className="form-control" type="email" name="email" required />
            <label for="passowrd">Passowrd :</label>
            <input className="form-control" type="passowrd" name="passowrd" required />
            <div className="footer">
              <span>Forgot passowrd ?  <a href=" " onClick={() => navigate("/forgot-password")}> Click here!</a></span>
            </div>
            <button type="submit" className="btn-primary" onClick={() => navigate("/signup")}>Sign In</button>
          </form>


      </div>
    </div>

  )
}


export default SignIn;
