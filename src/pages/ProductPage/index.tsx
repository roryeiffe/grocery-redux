import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import SubCategory from "../../components/SubCategory";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let params = useParams();
  // which category we want to display:
  const [categoryId, ] = useState(params.categoryId);
  // which sub category we want to display:
  const [subCategoryId, ] = useState();

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        {subCategoryId}
        <div className="row">
          <div className="col-lg-3">
            <SubCategory
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
