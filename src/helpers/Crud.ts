import axios from "axios";
import { Iuser } from "../interfaces/interfaces";

////////////////// API url
const url =
  "https://cors-everywhere.herokuapp.com/http://51.38.51.187:5050/api/v1/users";

////////////////// CRUD METHODS
export const getUsers = async (token: string) => {
  let tokenHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(url, tokenHeader);
  return data;
};

export const getUserById = async (id: string, token: string) => {
  let tokenHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${url}/${id}`, tokenHeader);
  return data;
};

export const createUser = async (body: Iuser, token: string) => {
  let tokenHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(url, body, tokenHeader);
  return data;
};

export const updateUser = async (id: string, body: Iuser, token: string) => {
  let tokenHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.put(`${url}/${id}`, body, tokenHeader);
  return data;
};

export const deleteUser = async (id: string, token: string) => {
  let tokenHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${url}/${id}`, tokenHeader);
  return data;
};
