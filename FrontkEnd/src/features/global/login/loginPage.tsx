import React from "react";
import LoginForm from "./loginForm";
import { LoginPageDiv } from "../../../styled-components/login/styled-components";
import { BoxDiv } from "../../../styled-components/styled-components";

function LoginPage() {
  return (
    <BoxDiv>
      <LoginPageDiv>
        <LoginForm />
      </LoginPageDiv>
    </BoxDiv>
  );
}

export default LoginPage;
