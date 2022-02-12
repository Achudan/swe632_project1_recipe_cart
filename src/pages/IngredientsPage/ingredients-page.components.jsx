import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ingredients-page.styles.scss';
import INGREDIENTS_DATA from "./ingredients-data";

const IngredientsPage = ()=>{
    const {ingredientName} = useParams();
    const {ingredientList} = useState(INGREDIENTS_DATA);
    const prod_details = ingredientList.filter(item=>{
        return item.ingredientName === ingredientName
    })
    console.log(prod_details)
    return(
        <div className="ingredients-page">
            <div className="product-details">
            </div>
            <div className="food-choices">
                <p>{ingredientName}</p>
            </div>
        </div>
    )
}

export default IngredientsPage;