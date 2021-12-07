import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useDispatch} from 'react-redux';

interface ISubCategory {
    subId: number;
    subName: string;
    subDescription: string;
    subImage: string;
    catId: number;
    status: boolean;
}

interface ISubCategories {
    subCategories: ISubCategory[];
}

const SubCategory = (props:any) => {
  const [subCategory, setSubCategory] = useState<ISubCategories>({subCategories: []});

  const dispatch = useDispatch();

  // given the user clicking on a sub category, update the redux store:
  const changeSubCategoryIdHandler = React.useCallback( (newSubCatId:number ) => {
    console.log(newSubCatId);
    dispatch({type: 'UPDATE_SUB_CATEGORY', payload: newSubCatId})
  }, [dispatch]);


  useEffect(() => {
    axios
      .get("https://apolis-grocery.herokuapp.com/api/subcategory/" + props.categoryId)
      .then( (response) => {
        setSubCategory({subCategories: response.data.data});
        // use the passed in function to tell the parent company
        // what the default subcategory is:
        changeSubCategoryIdHandler(subCategory.subCategories[0].subId);
      })
      .catch((error) => console.error(error));

  },[props.categoryId, subCategory.subCategories, changeSubCategoryIdHandler]);

  return (
    <ul className="list-group">
      {subCategory.subCategories.map((item:ISubCategory) => (
        <li onClick = {() => changeSubCategoryIdHandler(item.subId)} className="list-group-item">{item.subName}</li>
      ))}
    </ul>
  );
};

export default SubCategory;
