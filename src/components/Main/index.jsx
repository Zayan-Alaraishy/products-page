import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllProducts,
  sortPrice,
  sortAlpha,
} from "../../redux/actions/productActions";
import Pagination from "../Pagination";
import ProductCard from "../Product";

export default function Main() {
  const dispatch = useDispatch();
  const { products, loading, page } = useSelector(
    (state) => state.ProductReducers
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const productsPerPage = 6;
  const totalProducts = products.length;
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filterProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalValueOfDisplayedProducts = filterProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const sort = (e) => {
    if (e.target.value === "price-asc") {
      dispatch(sortPrice());
    } else {
      dispatch(sortAlpha());
    }
  };

  return (
    <div className="h-screen flex flex-col p-7">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="lg:flex lg:items-center lg:gap-2 mb-4 ">
            <select
              className="bg-light-gray p-2 rounded  focus:outline-none"
              onChange={sort}
            >
              <option value="" hidden>
                Sort by
              </option>
              <option value="price-asc">Price - Lowest to Highest</option>
              <option value="alpha-asc">Alphabet - A-Z</option>
            </select>
            <h1 className="text-white bg-black rounded p-1.5">
              Number of products: {filterProducts?.length}
            </h1>
            <h1 className="text-white bg-black rounded p-1.5">
              Total value of all: {totalValueOfDisplayedProducts}$
            </h1>
          </div>

          <div className="flex flex-wrap gap-6">
            {filterProducts.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
          {totalProducts > productsPerPage && (
            <div className="mt-auto">
              <Pagination
                page={page}
                totalProducts={totalProducts}
                productsPerPage={productsPerPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
