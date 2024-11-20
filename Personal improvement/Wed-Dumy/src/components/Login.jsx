import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="login-view">
        <div className="left"></div>

        <div className="right">
          {/* ------------------------------------------------------------------------------ */}
          <div className="icon">
            <div className="logo">
              <img
                src="https://s3-alpha-sig.figma.com/img/ae76/4789/d89baad98ce45e7cd2f31a2d3707171e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XH82yEr9ZQdOsD~4BkwfrFidHLjz~styfL-zGamBPHU3rClmulcWzpM09Nrdq0D7RDSwhDDz7WxoREWHtpoUKQ4B9SZMiZqKyDDoQzkG0ILsUdHpxGLKrDdXFGlbXcZKQtsAW2Ub8wyQvTKR26u2ybnkJ8hGdSs1jzARqxxkczazSJOzDZMDoj~uxNnVC6q4lUeNHgp5VgH-2FQ~2HDS7OtjaqRZ92mgE4eUBz5Xxv5ntlAxPJqtS25WKL7mrxFu2E7zgYHiqJxqR1mjMM6Dzb4hvvXcF9O1vZ~CHl872xcEe-WE0B--6I-Q~xh6Xcxy2pfYzOkCqauyNqP~QBBTdA__"
                alt=""
              />
            </div>
            <div className="text">
              <h2>ui unicon</h2>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------- */}

          <div className="email">
            <p>Login</p>
            <input type="text" placeholder="Enter your email" />
          </div>

          <div className="password">
            <p>password</p>
            <input type="text" placeholder="Enter your email" />
          </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="remember">
            <div className="remember-me">
              <label htmlFor="">
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <div className="forget-password">Forgot password?</div>
          </div>

          {/* --------------------------------------------------------------------------- */}

          <div className="sign-in">
            <h4>sign in</h4>
          </div>

          {/* ------------------------------------------------------------------------------------- */}

          <div className="google">
            <div className="both">
              <div className="photo">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2f8f/449b/2a59233c5968ccd19e7b7a82da381262?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdRl1VJXJBtV0JqlKyqRwhGPfowOAUzSSnqdSxL7bdVrYI1OcC-V-1X3wGbKLmlFVX8pHbLZyVbsGjvvit8wlXxzrKz7qpcSpgEJeNVrl6l~en~OSY~JP3NfShTIsKgbisnfSTbgMluCAZgAsrd8tY4b7WarN1yF0n5b8YxBbN5ZEWhsHWYw9gmKnXRV3ehSUB~ltTvCIy34WHsE35WNBhTh4qL9wd9NYSs5IiQC5WTtQKFPkhJdowFEFsWd8f~7SphFoYf93JhOq3Iq1HgtHgtG8TArcSU90mIOIrwaUJeqRhmPQWSS99Cod6pAUOXhF5fvMX1Iul63de1JiiW4wQ__"
                  alt=""
                />
              </div>
              <div className="with">
                <h4> Or sign in with google</h4>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------------------        */}

          <div className="account">
            <p>Dont have an account?</p>
            <p>
              {" "}
              <span>Sign up Now</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
