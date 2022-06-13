import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/reduxHooks";
import { selectToken, login } from "../redux/reducers/login-reducer";
import { IerrorMsg, Iuser } from "../interfaces/interfaces";
import logIn from "../helpers/LogIn";
import Spinner from "../components/Spinner";
import ErrorMsg from "../components/ErrorMsg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);

  //////////// Hooks
  const [errorMsg, setErrorMsg] = useState<IerrorMsg>();
  const [loading, setLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<Iuser>({
    email: "",
    password: "",
  });

  //////////// Handlers
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const request = await logIn(credentials);
      setLoading(false);
      dispatch(login({ token: request }));
      setErrorMsg({ success: `Welcome ${credentials.email}` });
      setTimeout(() => {
        navigate("/users");
      }, 2000);
    } catch (error: any) {
      setErrorMsg({
        success: "",
        error: error.response.data.message,
      });
      setLoading(false);
    }
  };

  //////////// Use Effects
  useEffect(() => {
    if (token !== "") {
      setTimeout(() => {
        navigate("/users");
      }, 2000);
    }
  }, []);

  return (
    <div className='container center-content text-center'>
      {loading ? (
        <Spinner text='Loading...' />
      ) : (
        <div className='row justify-content-md-center'>
          <h3 className='h3 mb-3 fw-normal'>Login</h3>
          <form className='col col-md-auto' onSubmit={loginHandler}>
            <div className='form-floating'>
              <input
                className='form-control mb-1'
                type='email'
                name='email'
                placeholder='Email'
                onChange={inputHandler}
                required
              ></input>
              <label htmlFor='email'>email</label>
            </div>
            <div className='form-floating'>
              <input
                className='form-control mb-1'
                type='password'
                name='password'
                value={credentials.password}
                onChange={inputHandler}
                placeholder='Password'
                minLength={5}
                required
              ></input>
              <label htmlFor='password'>password</label>
            </div>
            <input
              className='w-100 btn btn-lg btn-primary'
              type='submit'
              value='Login'
            ></input>
          </form>
          <div className='mt-2'>
            {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
            <p>Don't have an account?</p>
            <Link to='/signUp'>Register</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
