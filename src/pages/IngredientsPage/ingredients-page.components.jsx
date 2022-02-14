import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ingredients-page.styles.scss';
import INGREDIENTS_DATA from "./ingredients-data";
import CustomButton from "../../components/CustomButton/custombutton-component";

const IngredientsPage = () => {
    const { ingredientName } = useParams();
    const [ingredientList] = useState(INGREDIENTS_DATA);

    const handleSubmit = (elt) =>{
        alert('Added to bag successfully');
    }
    return (
        <div className="ingredients-page">
            <div className="product-details">
                <h1>{ingredientList[ingredientName].name}</h1>
                <ul className="selected-list">
                    {ingredientList[ingredientName].bases.map((element, i) => {
                        console.log(element)
                        return (<li key={i}>{element}</li>)
                    })}

                    <li>Add more</li>
                </ul>

                <div className="buttons">
                    <CustomButton type="submit" onClick={handleSubmit}>Add to cart</CustomButton>
                </div>
            </div>
            <div className="food-choices">
                <p>reach</p>

            </div>
        </div>
    )
}

export default IngredientsPage;