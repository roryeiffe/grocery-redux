import React, { useState } from "react";
import Category from "../../components/Category";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import SubCategory from "../../components/SubCategory";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let params = useParams();
  // which category we want to display:
  const [categoryId, setCategoryId] = useState(params.categoryId);
  // which sub category we want to display:
  const [subCategoryId, setSubCategoryId] = useState();

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        {subCategoryId}
        <div className="row">
          <div className="col-lg-3">
            <SubCategory
              setSubCategoryId={setSubCategoryId}
              categoryId={categoryId}
            />
          </div>
          <div className="col-lg-9">
            <ProductList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
