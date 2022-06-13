import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Error404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div className="container center-content text-center">
      <Spinner text="Error 404, route not found. Redirecting..." />
    </div>
  );
};

export default Error404;
