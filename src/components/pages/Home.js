import { useQuery } from "@apollo/client";
import Layout from '../Layout/Layout';
import Product from "../../components/Product";
import Loader from "../Product/Loader";
// import products from "../../data/products.json";
import { GET_PRODUCTS } from '../../graphql/queries/product'

const Home = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    // const products = data.products;
    console.log('loading: ', loading);
    console.log('error: ', error);
    console.log('gql: ', data);
    // if (loading) return <Loader />;
    if (error) return `Error! ${error}`;
    return (
        <>
            <Layout>
                <div className="container sm:max-w-full md:max-w-full lg:max-w-full bg-stone-100">
                    <div className="container mx-auto px-32 py-16">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-2xl">All Products</h1>
                                <p>A 360<sup>o</sup> look at Lumin</p>
                            </div>
                            <div>
                                <select className="block w-64 px-4 py-3">
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
                            ? <Loader />
                            : <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                                {data.products.map((product) => (
                                    <Product product={product} key={product.id} />
                                ))}
                            </div>}

                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Home;