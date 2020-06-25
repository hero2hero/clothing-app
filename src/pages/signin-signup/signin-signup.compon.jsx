import React from "react";
import "./signin-signup.styles.scss";
import SignIn from "../../components/sign-in/sign-in.compon";
import SignUp from '../../components/sign-up/sign-up.compon';

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
