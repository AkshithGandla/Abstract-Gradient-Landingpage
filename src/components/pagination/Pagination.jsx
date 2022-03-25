import React, { useState } from "react";
import "./pagination.css";

const Pagination = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="pagination">
      <ul className="pagination-1">
        <li className={page === 1 ? "page-number active" : "page-number"}>
          <a onClick={() => setPage(1)} href="#1">
            1
          </a>
        </li>
        <li className={page === 2 ? "page-number active" : "page-number"}>
          <a onClick={() => setPage(2)} href="#2">
            2
          </a>
        </li>
        <li className={page === 3 ? "page-number active" : "page-number"}>
          <a onClick={() => setPage(3)} href="#3">
            3
          </a>
        </li>
        <li className={page === 4 ? "page-number active" : "page-number"}>
          <a onClick={() => setPage(4)} href="#4">
            4
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
