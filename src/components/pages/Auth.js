import { useDispatch } from "react-redux";
import { useRef } from "react";
import "./Auth.css";
import { authActions } from "../store/auth";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
   
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // storing only data
    // fetch('https://yoga-asanas-default-rtdb.firebaseio.com/login.json',{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //   })
    // })

    // Adding authentication
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBB6_idHx6wduyMbd9UNgmTvhdLfCYXOaM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBB6_idHx6wduyMbd9UNgmTvhdLfCYXOaM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async res => {
        setIsLoading(false);
        const resData = await res.json()
        if (!res.ok) {
          let errorMessage= 'Authentication Failed!';
          throw new Error(errorMessage);
        } 
        return resData;
      })
        // else {
        //   return res.json().then((data) => {
        //     // show an error msg on display
        //     let errorMessage = "Authentifiaction failed!";

        //     throw new Error(errorMessage);
        //   });
        // }
      
      .then((data) => {
        authActions.login(data.idToken)
      })
      .catch((err) => {
        alert(err.message);
      });

      
  };

  return (
    <div>
      <h1 className="auth-heading">Welcome to Yoga Asanas!</h1>
      <main className="auth">
        <section>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={loginHandler}>
            <div className="control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className="control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className="actions">
              {!isLoading && (
                <button>{isLogin ? "Login" : "Create Account"}</button>
              )}
              {isLoading && <p>Sending request....</p>}
              <button
                type="button"
                className="toggle"
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Auth;
