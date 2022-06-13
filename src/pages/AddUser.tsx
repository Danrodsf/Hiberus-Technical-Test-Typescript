import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector } from "../redux/reduxHooks";
import { selectToken } from "../redux/reducers/login-reducer";
import { createUser } from "../helpers/Crud";
import { IerrorMsg, Iuser } from "../interfaces/interfaces";
import Spinner from "../components/Spinner";
import ErrorMsg from "../components/ErrorMsg";

const AddUser = () => {
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);

  //////////// Hooks
  const [errorMsg, setErrorMsg] = useState<IerrorMsg>();
  const [loading, setLoading] = useState<boolean>(false);
  const [body, setBody] = useState<Iuser>({
    email: "",
    password: "",
    name: "",
    surname: "",
    id: "",
  });

  //////////// Handlers
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const createUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUser(body, token);
      setLoading(false);
      setErrorMsg({ success: "User successfully created" });
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

  useEffect(() => {
    if (token === "" || null || undefined) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, []);

  return (
    <div className='container center-content text-center'>
      {loading ? (
        <Spinner text='Loading...' />
      ) : (
        <>
          {token !== "" ? (
            <div>
              <div className='row justify-content-md-center'>
                <form className='col col-md-auto' onSubmit={createUserHandler}>
                  <h3>Create New User</h3>
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
                      type='text'
                      name='id'
                      placeholder='Id'
                      onChange={inputHandler}
                      minLength={5}
                      required
                    ></input>
                    <label htmlFor='id'>Id</label>
                  </div>
                  <input
                    className='btn btn-lg btn-primary mb-1'
                    type='submit'
                    value='Create New User'
                  ></input>
                </form>
              </div>
              <div className='border-top mt-2'>
                {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
                <Link to='/users' className='btn btn-danger'>
                  Go back
                </Link>
              </div>
            </div>
          ) : (
            <Spinner text='Unauthorized. Redirecting...' />
          )}
        </>
      )}
    </div>
  );
};

export default AddUser;
