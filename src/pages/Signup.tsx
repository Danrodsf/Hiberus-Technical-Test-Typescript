import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IerrorMsg, Iuser } from "../interfaces/interfaces";
import SignUp from "../helpers/SignUp";
import Spinner from "../components/Spinner";
import ErrorMsg from "../components/ErrorMsg";

const Signup = () => {
  const navigate = useNavigate();

  //////////// Hooks
  const [errorMsg, setErrorMsg] = useState<IerrorMsg>();
  const [loading, setLoading] = useState<boolean>(false);
  const [body, setBody] = useState<Iuser>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  //////////// Handlers
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const createUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await SignUp(body);
      setLoading(false);
      setErrorMsg({ success: "User successfully created" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: any) {
      setErrorMsg({
        success: "",
        error: error.response.data.message,
      });
      setLoading(false);
    }
  };

  return (
    <div className='container center-content text-center'>
      {loading ? (
        <Spinner text='Loading...' />
      ) : (
        <div className='row justify-content-md-center'>
          <h3 className='h3 mb-3 fw-normal'>Register new account</h3>
          <form className='col col-md-auto' onSubmit={createUserHandler}>
            <div className='form-floating'>
              <input
                className='form-control mb-1'
                type='text'
                name='name'
                placeholder='Name'
                onChange={inputHandler}
                minLength={5}
                required
              ></input>
              <label htmlFor='name'>Name</label>
            </div>
            <div className='form-floating'>
              <input
                className='form-control mb-1'
                type='text'
                name='surname'
                placeholder='Surname'
                onChange={inputHandler}
                minLength={5}
                required
              ></input>
              <label htmlFor='surname'>Surname</label>
            </div>
            <div className='form-floating'>
              <input
                className='form-control mb-1'
                type='email'
                name='email'
                placeholder='email'
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
                placeholder='password'
                onChange={inputHandler}
                minLength={5}
                required
              ></input>
              <label htmlFor='password'>password</label>
            </div>
            <input
              className='w-100 btn btn-lg btn-primary'
              type='submit'
              value='Create New User'
            ></input>
          </form>
          <div>
            {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
            <p>Already have an account?</p>
            <Link to='/'>Login</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
