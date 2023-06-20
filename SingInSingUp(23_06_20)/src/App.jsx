import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSignInClick = () => {
    setIsActive(false);
  };

  const handleSignUpClick = () => {
    setIsActive(true);
  };
  return (
    <Wrap isActive={isActive}>
      <div className="container">
        <div className="blueBg">
          <div className="box signin">
            <h2>Already Have an Account ?</h2>
            <button className="signinBtn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <div className="box signup">
            <h2>Don't Have an Account ?</h2>
            <button className="signupBtn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>
        <div className={`formBx ${isActive ? "active" : ""}`}>
          <div className="form signinForm">
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="password" />
              <input type="submit" value="Login" />
              <a href="#" className="forgot">
                Forgot Password
              </a>
            </form>
          </div>
          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${(props) => (props.isActive ? "#f43648" : "#03a9f4")};
  transition: 0.5s;

  .container {
    position: relative;
    width: 800px;
    height: 500px;
    margin: 20px;

    .blueBg {
      position: absolute;
      top: 40px;
      width: 100%;
      height: 420px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);

      .box {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
          color: #fff;
          font-size: 1.2em;
          font-weight: 500;
          margin-bottom: 10px;
        }

        button {
          cursor: pointer;
          padding: 10px 20px;
          background: #fff;
          color: #333;
          font-size: 16px;
          font-weight: 500;
          border: none;
        }
      }
    }

    .formBx {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: #fff;
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
      transition: 0.5s ease-in-out;
      overflow: hidden;

      .form {
        position: absolute;
        left: 0;
        width: 100%;
        padding: 50px;
        transition: 0.5s;

        form {
          width: 100%;
          display: flex;
          flex-direction: column;

          h3 {
            font-size: 1.5em;
            color: #333;
            margin-bottom: 20px;
            font-weight: 500;
          }

          input {
            width: 75%;
            margin-bottom: 20px;
            padding: 10px;
            outline: none;
            font-size: 16px;
            border: 1px solid #333;
            box-sizing: border-box;
          }

          input[type="submit"] {
            background: #03a9f4;
            border: none;
            color: #fff;
            max-width: 100px;
            cursor: pointer;
          }

          .forgot {
            color: #333;
          }
        }
      }

      .signinForm {
        transition-delay: 0.25s;
      }

      .signupForm {
        left: 100%;
        transition-delay: 0s;
      }
    }

    .formBx.active {
      left: 50%;

      .signinForm {
        left: -100%;
        transition-delay: 0s;
      }

      .signupForm {
        left: 0;
        transition-delay: 0.25s;
      }

      .signupForm input[type="submit"] {
        background: #f43648;
      }
    }
  }

  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      max-width: 400px;
      height: 650px;
      .blueBg {
        top: 0;
        height: 100%;
        .box {
          position: absolute;
          width: 100%;
          height: 150px;
          bottom: 0;
        }
        .signin {
          top: 0;
        }
      }
      .formBx {
        width: 100%;
        height: 500px;
        top: 0;
        box-shadow: none;
        &.active {
          left: 0;
          top: 150px;
        }
      }
    }
  }
`;
