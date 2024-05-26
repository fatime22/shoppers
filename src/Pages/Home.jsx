import React, { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import CategoryCard from "../Components/CategoryCard";
import Footer from "../Components/Footer" 
import cWomen from "../../public/image/women.jpg";
import cChildren from "../../public/image/children.jpg";
import cMen from "../../public/image/men.jpg";

import blog from "../../public/image/blog_1.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    let response = await axios.get("http://localhost:3000/products/");
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section id="perfectShoes">
        <div className="container">
          <div className="row align-items-start align-items-md-center justify-content-end">
            <div className="hero-text col-md-5 text-md-left pt-5 pt-md-0">
              <h1 className="mb-2">Finding Your Perfect Shoes</h1>
              <div className="text-md-left">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.{" "}
                </p>
                <p>
                  <a href="#" className="btn btn-sm btn-primary">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="categoryCards">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div className="icon align-self-start p-3">
                <FaTruck size={30} color="indigo" />
              </div>
              <div className="text">
                <h2>FREE SHIPPING</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon align-self-start p-3">
                <IoReload size={30} color="indigo" />
              </div>
              <div className="text">
                <h2>FREE RETURNS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon mr-4 align-self-start p-3">
                <BsFillQuestionCircleFill size={30} color="indigo" />
              </div>
              <div className="text">
                <h2>CUSTOMER SUPPORT</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="categoryArea">
        <div className="container">
          <div className="categories">
            <div className="row ">
              <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0 d-flex justify-content-center">
                <CategoryCard
                  image={cWomen}
                  description="collections"
                  title="Woman"
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0 d-flex justify-content-center">
                <CategoryCard
                  image={cChildren}
                  description="collections"
                  title="Children"
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0 d-flex justify-content-center">
                <CategoryCard
                  image={cMen}
                  description="collections"
                  title="Man"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="productArea">
        <div className="container">
          <div className="row justify-content-center position-relative">
            <div className="col-md-7 section-heading text-center pt-4">
              <h2>Featured Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="products row">
              {products.map((item) => {
                return <ProductCard key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="bigSale">
        <div className="container">
          <div className="row justify-content-center position-relative">
            <div className="col-md-7 section-heading text-center pt-4">
              <h2>Big Sale!</h2>
            </div>
          </div>
          <div className="row sale-content pt-5">
            <div className="col-md-12 col-lg-7 mb-5">
              {" "}
              <a href="#">
                <img
                  src={blog}
                  alt="sale"
                  className="img-fluid rounded"
                />
              </a>
            </div>
            <div className="col-md-12 col-lg-5 text-center pl-md-5 sale-text">
              <h2>
                <h1>50% less in all items</h1>
              </h2>
              <p className="post-meta mb-4">
                By <a href="#">Carl Smith</a>
                <span className="block-8-sep">•</span> September 3, 2018
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iste dolor accusantium facere corporis ipsum animi
                deleniti fugiat. Ex, veniam?
              </p>
              <p>
                <a href="" className="btn btn-primary btn-sm">
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
