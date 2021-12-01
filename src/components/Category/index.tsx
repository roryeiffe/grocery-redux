import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

interface ICategory{
  catImage: string;
  catDescription: string;
  position: number;
  status : boolean;
  catId: number;
  catName: string;
}

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/category")
      .then((res) => {
        setCategories(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="row">
      {categories.map((item:ICategory) => (
          <Item data={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
