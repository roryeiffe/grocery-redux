import React from 'react'
import {Link} from 'react-router-dom';

interface ICategory{
    catImage: string;
    catDescription: string;
    position: number;
    status : boolean;
    catId: number;
    catName: string;
}

interface IProps {
    data: ICategory;
}

const Item = (props:IProps) => {

    const data: ICategory = props.data;
    
    return (
        <div className="col-lg-3">
            <div className="card">
                <img className="card-img-top" src={'http://rjtmobile.com/grocery/images/'+data.catImage} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{data.catName}</h5>
                    <p className="card-text">{data.catDescription}</p>
                    <Link to={'product/' + data.catId} className="btn btn-primary">View {data.catName}</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;