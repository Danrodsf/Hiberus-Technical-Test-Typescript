import axios from "axios";
import { Iuser } from "../interfaces/interfaces";

const SignUp = async (body: Iuser) => {
  const url =
    "https://cors-everywhere.herokuapp.com/http://51.38.51.187:5050/api/v1/auth/sign-up";

  const { data } = await axios.post(url, body);
  return data;
};

export default SignUp;
