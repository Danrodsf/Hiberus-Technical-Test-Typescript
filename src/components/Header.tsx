import { useAppSelector } from "../redux/reduxHooks";
import { selectToken } from "../redux/reducers/login-reducer";
import LogOut from "./LogOut";

const Header = () => {
  const token = useAppSelector(selectToken);
  return (
    <div className='mb-1'>
      {token !== "" ? (
        <div className='border-bottom text-center'>
          <h1>Hiberus FrontEnd Technical Test</h1>
          <LogOut />
        </div>
      ) : (
        <h1 className='border-bottom text-center pb-2'>
          Hiberus FrontEnd Technical Test
        </h1>
      )}
    </div>
  );
};

export default Header;
