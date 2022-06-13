import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { selectToken } from "../redux/reducers/login-reducer";
import { getUserById, updateUser, deleteUser } from "../helpers/Crud";
import Spinner from "../components/Spinner";
import ErrorMsg from "./ErrorMsg";
import { Iuser, IerrorMsg } from "../interfaces/interfaces";
import "./UserModal.css";

const UserModal = ({
  userId,
  closeModal,
  setRender,
}: {
  userId: string;
  closeModal: Function;
  setRender: Function;
}) => {
  ////////////////// Hooks
  const token = useAppSelector(selectToken);
  const [user, setUser] = useState<Iuser>();
  const [edit, setEdit] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<IerrorMsg>();
  const [loading, setLoading] = useState<boolean>(false);
  const [body, setBody] = useState<Iuser>({
    email: "",
    password: "",
    name: "",
    surname: "",
    id: "",
  });

  ////////////////// Handlers
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const updateUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUser(userId, body, token);
      setLoading(false);
      setErrorMsg({ success: "User successfully updated" });
      setTimeout(() => {
        closeModal(false);
        setRender(2);
      }, 2000);
    } catch (error: any) {
      setErrorMsg({
        success: "",
        error: error.response.data.message,
      });
      setLoading(false);
    }
  };

  const deleteUserHandler = async () => {
    setLoading(true);
    try {
      await deleteUser(userId, token);
      setLoading(false);
      setErrorMsg({ success: "User successfully deleted" });
      setTimeout(() => {
        closeModal(false);
        setRender(3);
      }, 2000);
    } catch (error: any) {
      setErrorMsg({
        success: "",
        error: error.response.data.message,
      });
      setLoading(false);
    }
  };

  ////////////////// Use Effect
  useEffect(() => {
    const requestUser = async () => {
      setLoading(true);
      try {
        const res = await getUserById(userId, token);
        setLoading(false);
        setUser(res);
      } catch (error: any) {
        setErrorMsg({
          success: "",
          error: error.response.data.message,
        });
        setLoading(false);
      }
    };
    requestUser();
  }, [userId]);

  return (
    <div className='modal-backdrop' onMouseDown={() => closeModal(false)}>
      <div className='modal-content' onMouseDown={(e) => e.stopPropagation()}>
        <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
          <button
            className='btn-close my-2'
            onClick={() => closeModal(false)}
          ></button>
          {loading ? (
            <Spinner text='loading...' />
          ) : (
            <>
              {edit ? (
                <div className='row justify-content-md-center'>
                  <form
                    className='col col-md-auto'
                    onSubmit={updateUserHandler}
                  >
                    <h5 className='mt-2'>Edit User</h5>
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
                        minLength={4}
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
                        minLength={4}
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
                        minLength={2}
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
                        minLength={2}
                        required
                      ></input>
                      <label htmlFor='id'>Id</label>
                    </div>
                    <input
                      className='btn btn-md btn-warning my-2'
                      type='submit'
                      value='Edit User'
                    ></input>
                  </form>
                  {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
                </div>
              ) : (
                <div className='w-100'>
                  <ul className='list-group'>
                    <li className='list-group-item active'>
                      <h5>User Info:</h5>
                    </li>
                    <li className='list-group-item'>
                      <strong>User:</strong> {user?.name}
                    </li>
                    <li className='list-group-item'>
                      <strong>Username:</strong> {user?.surname}
                    </li>
                    <li className='list-group-item '>
                      <strong>email:</strong> {user?.email}
                    </li>
                    <li className='list-group-item list-group-item-action'>
                      <a href='#'>
                        <i
                          className='bi bi-pencil fs-3 mx-1 link-warning'
                          onClick={() => setEdit(true)}
                        ></i>
                      </a>
                    </li>
                    <li className='list-group-item list-group-item-action'>
                      <a href='#'>
                        <i
                          className='bi bi-trash fs-3 mx-1 link-danger'
                          onClick={deleteUserHandler}
                        ></i>
                      </a>
                    </li>
                  </ul>
                  {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
