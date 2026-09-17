import Layout from "./common/layout";

const Product = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <nav aria-label="breadcrumb" className="py-4">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    <a href="/shop">Shop</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Product;
