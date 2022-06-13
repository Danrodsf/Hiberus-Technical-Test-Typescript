import axios from "axios";
import { Iuser } from "../interfaces/interfaces";

const logIn = async (body: Iuser) => {
  const url =
    "https://cors-everywhere.herokuapp.com/http://51.38.51.187:5050/api/v1/auth/log-in";

  const { data } = await axios.post(url, body);
  return data.accessToken;
};

export default logIn;
