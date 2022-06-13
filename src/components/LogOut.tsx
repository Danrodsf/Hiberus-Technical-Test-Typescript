import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/reduxHooks";
import { logout } from "../redux/reducers/login-reducer";
import { IerrorMsg } from "../interfaces/interfaces";

import ErrorMsg from "./ErrorMsg";

const LogOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<IerrorMsg>();

  const logOut = () => {
    setErrorMsg({ success: "Logging out, goodbye..." });
    setTimeout(() => {
      dispatch(logout());
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <button className='btn btn-danger' onClick={logOut}>
        Logout
      </button>
      {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
    </>
  );
};

export default LogOut;
