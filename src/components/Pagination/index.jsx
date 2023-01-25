import React from "react";
import { useDispatch } from "react-redux";

import { setCurrentPage } from "../../redux/actions/productActions";

const Pagination = ({ page, totalProducts, productsPerPage }) => {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  return (
    <ul className="flex gap-4 items-center align-middle">
      {page !== 1 && (
        <li>
          <button
            className="text-4xl font-bold text-black"
            onClick={() => dispatch(setCurrentPage(page - 1))}
          >
            &laquo;
          </button>
        </li>
      )}

      {pages.map((p) => (
        <li
          key={p}
          className={`bg-[#22D887] p-2 px-4 rounded text-black font-bold ${
            p === page && `border border-black`
          }`}
          onClick={() => dispatch(setCurrentPage(p))}
        >
          <button>{p}</button>
        </li>
      ))}
      {totalPages !== page && (
        <li>
          <button
            className="text-4xl font-bold text-black"
            onClick={() => dispatch(setCurrentPage(page + 1))}
          >
            &raquo;
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
