import { Ipagination } from "../interfaces/interfaces";

const Pagination = ({ usersPerPage, totalUsers, paginate }: Ipagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination pagination-sm justify-content-center">
      {pageNumbers.map((page: number) => (
        <li key={page} className="page-item">
          <a onClick={() => paginate(page)} href="#" className="page-link">
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
