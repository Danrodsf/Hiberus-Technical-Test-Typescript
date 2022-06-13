export interface Iuser {
  name?: string;
  surname?: string;
  email: string;
  password: string;
  id?: string;
}

export interface Ipagination {
  usersPerPage: number;
  totalUsers: number;
  paginate: Function;
}

export interface IerrorMsg {
  success?: string;
  error?: string;
}
