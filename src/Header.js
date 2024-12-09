import { useState } from "react";
import './Header.css';
import SignIn from './SignIn';
import SignUp from './SignUp';


export default function Header() {
  const [isSignIn, setIsSignIn] = useState(false); 

  return (

    <div >
      <div>
        <div>
          <button onClick={() => setIsSignIn(false)}>Sign Up</button>
          <button onClick={() => setIsSignIn(true)}>Sign In</button>
        </div>
        {isSignIn ? <SignIn /> : <SignUp />} 

      </div>
    </div>
  );
}
