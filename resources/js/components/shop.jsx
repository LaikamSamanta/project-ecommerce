import { Head } from "@inertiajs/react";
import Layout from "./common/layout";
import ProductImg from "@/assets/eight.jpg";

const Shop = () => {
    return (
        <Layout>
            <div className="container">
                <nav aria-label="breadcrumb" className="py-4">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Shop
                        </li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow border-0 mb-3">
                            <div className="card-body py-4">
                                <h3 className="mb-3">Categories</h3>
                                <ul>
                                    <li className="mb-2">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" className="ps-2">
                                            Kids
                                        </label>
                                    </li>
                                    <li className="mb-2">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" className="ps-2">
                                            Women
                                        </label>
                                    </li>
                                    <li className="mb-2">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" class="ps-2">
                                            Men
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card shadow border-0 mb-3">
                            <div className="card-body py-4">
                                <h3 className="mb-3">Brands</h3>
                                <ul>
                                    <li className="mb-2">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" className="ps-2">
                                            Puma
                                        </label>
                                    </li>
                                    <li className="mb-2">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" className="ps-2">
                                            Killer
                                        </label>
                                    </li>
                                    <li className="mb-2">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" class="ps-2">
                                            Levis
                                        </label>
                                    </li>
                                    <li className="mb-2">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" class="ps-2">
                                            Flying Machine
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row pb-5">
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img
                                            src={ProductImg}
                                            alt="Product"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="card-body pt-3">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price mt-2">
                                            $50.00{" "}
                                            <span className="text-decoration-line-through">
                                                $80.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img
                                            src={ProductImg}
                                            alt="Product"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="card-body pt-3">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price mt-2">
                                            $50.00{" "}
                                            <span className="text-decoration-line-through">
                                                $80.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img
                                            src={ProductImg}
                                            alt="Product"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="card-body pt-3">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price mt-2">
                                            $50.00{" "}
                                            <span className="text-decoration-line-through">
                                                $80.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img
                                            src={ProductImg}
                                            alt="Product"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="card-body pt-3">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price mt-2">
                                            $50.00{" "}
                                            <span className="text-decoration-line-through">
                                                $80.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img
                                            src={ProductImg}
                                            alt="Product"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="card-body pt-3">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price mt-2">
                                            $50.00{" "}
                                            <span className="text-decoration-line-through">
                                                $80.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img
                                            src={ProductImg}
                                            alt="Product"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="card-body pt-3">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price mt-2">
                                            $50.00{" "}
                                            <span className="text-decoration-line-through">
                                                $80.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Shop;
