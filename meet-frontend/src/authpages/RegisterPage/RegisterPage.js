import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Authbox from "../../Shared/components/AuthBox";
import RegisterPageInput from "./RegisterPageInput";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../Shared/utils/validator";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ register }) => {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      password,
      username,
    };

    register(userDetails, navigate);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password, setIsFormValid]);

  return (
    <Authbox>
      <Typography variant="5" sx={{ color: "white " }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </Authbox>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
