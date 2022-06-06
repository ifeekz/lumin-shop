import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { recalculateCart } from "../slice/cartSlice";
import Layout from "../Layout/Layout";
import ProductItem from "../Product/ProductItem";
import ProductSkeletonLoader from "../Product/ProductSkeletonLoader";
import { GET_PRODUCTS } from "../../graphql/queries/product"

const Home = () => {
  const currency = useSelector((state) => state.currency);
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
    variables: {currency: currency.currentCurrency},
  });
  const dispatch = useDispatch();

  useEffect(() => {
    refetch({ currency: currency.currentCurrency }).then((data) => {
      dispatch(recalculateCart(data.data));
    });
  }, [currency, dispatch, refetch])

  if (error) return `Error! ${error}`;
  return (
    <>
      <Layout>
        <div className="container sm:max-w-full md:max-w-full lg:max-w-full bg-stone-100">
          <div className="container mx-auto md:px-32 md:py-16">
            <div className="md:flex md:justify-between">
              <div>
                <h1 className="text-2xl">All Products</h1>
                <p>A 360<sup>o</sup> look at Lumin</p>
              </div>
              <div>
                <select className="block w-full md:w-64">
                  <option value="">Filter by</option>
                  <option value="price">Price</option>
                  <option value="new">New Arrival</option>
                  <option value="best">Best Seller</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="container sm:max-w-full md:max-w-full lg:max-w-full bg-neutral-300">
          <div className="container mx-auto px-32 py-16">
            {loading
              ? <ProductSkeletonLoader />
              : <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {data.products.map((product) => (
                  <ProductItem product={product} key={product.id} />
                ))}
              </div>}

          </div>
        </div>
      </Layout>
    </>
  );
}
export default Home;