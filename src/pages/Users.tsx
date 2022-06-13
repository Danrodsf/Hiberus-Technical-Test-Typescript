import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector } from "../redux/reduxHooks";
import { selectToken } from "../redux/reducers/login-reducer";
import { getUsers } from "../helpers/Crud";
import { Iuser } from "../interfaces/interfaces";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

const Users = () => {
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);

  ////////////////// Hooks
  const [users, setUsers] = useState<Iuser[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(10);
  const [limit, setLimit] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [render, setRender] = useState<number>(0);

  ////////////////// Indexes for pagination
  const LastUserindex = currentPage * usersPerPage;
  const FirstUserIndex = LastUserindex - usersPerPage;
  const currentUsers = users.slice(FirstUserIndex, LastUserindex);

  ////////////////// Current Page Setter
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  ////////////////// Use Effect
  useEffect(() => {
    if (token !== "") {
      setLoading(true);
      const requestUsers = async () => {
        const res = await getUsers(token);
        setUsers(res.items);
        setLimit(res.count);
        setLoading(false);
      };
      requestUsers();
    } else {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [render]);

  useEffect(() => {
    setRender(1);
  }, []);

  return (
    <div className='container center-content text-center'>
      {loading ? (
        <Spinner text='Loading...' />
      ) : (
        <>
          {token !== "" ? (
            <div>
              <h1 className='text-primary mb-1'>Users List</h1>
              <Link to='/addUser' className='btn btn-primary mb-3'>
                Create New User
              </Link>
              <div className='row row-cols-2'>
                <UserList users={currentUsers} setRender={setRender} />
              </div>
              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={limit!}
                paginate={paginate}
              />
            </div>
          ) : (
            <Spinner text='User not logged in, redirecting...' />
          )}
        </>
      )}
    </div>
  );
};

export default Users;
