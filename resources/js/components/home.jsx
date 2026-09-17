import LatestProducts from "./common/latestproducts";
import FeaturedProducts from "./common/featuredproducts";
import Layout from "./common/layout";
import Hero from "./common/hero";

const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <LatestProducts />
                <FeaturedProducts />
            </Layout>
        </>
    )
}
export default Home;
