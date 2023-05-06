import React, { useEffect, useState } from "react";
import ProductPreview from "../components/ProductPreview";
import productApi from "../axios/productApi";
import { Link, useSearchParams } from "react-router-dom";
import ProductSideBar from "../components/ProductSideBar";

function SearchPage() {
  const [query] = useSearchParams();
  const keyWord = query.get("q");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getListProductHandle = async () => {
      const { data } = await productApi.searchProductByName({ keyWord });
      setProducts(data.data);
    };
    getListProductHandle();
  }, [keyWord]);
  return (
    <div>
      {/* <!-- Breadcrumb Start --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" href="#">
                Home
              </Link>
              <Link className="breadcrumb-item text-dark" href="#">
                Shop
              </Link>
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb End --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <ProductSideBar />

          {/* <!-- Shop Product Start --> */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light">
                      <i className="fa fa-th-large"></i>
                    </button>
                    <button className="btn btn-sm btn-light ml-2">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" href="#">
                          Latest
                        </Link>
                        <Link className="dropdown-item" href="#">
                          Popularity
                        </Link>
                        <Link className="dropdown-item" href="#">
                          Best Rating
                        </Link>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Showing
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" href="#">
                          10
                        </Link>
                        <Link className="dropdown-item" href="#">
                          20
                        </Link>
                        <Link className="dropdown-item" href="#">
                          30
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {products &&
                products.map((product) => (
                  <ProductPreview key={product._id} {...product} />
                ))}
              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <Link className="page-link" href="#">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- Shop Product End --> */}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
