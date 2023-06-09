import React from "react";
import InputWithLabels from "../../Shared/components/InputWithLabels";

const LoginPageInput = ({mail, setMail, password, setPassword}) => {
  return (
    <>
      <InputWithLabels 
      value={mail}
      setValue={setMail}
      label="   E-mail"
      type="text"
      placeholder="Enter e-mail address"
      />
      <InputWithLabels 
      value={password}
      setValue={setPassword}
      label= "Password"
      type="password"
      placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageInput;
