import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ingredients-page.styles.scss';
import INGREDIENTS_DATA from "./ingredients-data";
import CustomButton from "../../components/CustomButton/custombutton-component";

import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const IngredientsPage = () => {
    const { ingredientName } = useParams();
    const [ingredientList] = useState(INGREDIENTS_DATA);

    const handleSubmit = (elt) => {
        alert('Added to bag successfully');
    }

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    var arr = [];
    Object.keys(ingredientList['Master_Ingredients_List']).forEach(function (key) {
        arr.push(key);
    });

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

                <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
                    <div className="accordion-section">
                        <div className="container">
                            {arr.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="wrap" onClick={() => toggle(index)} key={index}>
                                            <h1>{item}</h1>
                                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                        </div>
                                        <div className="dropdown-container">
                                            {clicked === index ? (
                                                ingredientList['Master_Ingredients_List'][item].map((item, index) => {
                                                    return (<div className="dropdown-elements" key={index}>
                                                        <p>{item}</p>
                                                    </div>)
                                                })
                                            ) : null}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </IconContext.Provider>

            </div>
        </div>
    )
}

export default IngredientsPage;