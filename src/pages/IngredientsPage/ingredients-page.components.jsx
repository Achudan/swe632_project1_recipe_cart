import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ingredients-page.styles.scss';
import INGREDIENTS_DATA from "./ingredients-data";
import CustomButton from "../../components/CustomButton/custombutton-component";

import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import RecipeCard from '../../components/RecipeCard/recipe_card.component'

// const imageDir = '../../components/RecipeDirectory/master_list_images'
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

    function checkIgredientPresent( recipeArr, item){
        let flag = false;
        recipeArr.forEach( elt => {
            elt = elt.toLowerCase()
            item = item.toLowerCase()
            console.log(elt, item)
            if(item.includes(elt) === true){
                flag = true;
                return;
            }
        })
        return (flag?'selected':'not-selected')
    }

    var arr = [];
    Object.keys(ingredientList['Master_Ingredients_List']).forEach(function (key) {
        arr.push(key);
    });

    var name = ingredientName.replace('_', ' ')

    return (
        <div className="ingredients-page">
            <div className="product-details">
                <h1>{ingredientList[ingredientName].name}</h1>
                <ul className="selected-list">
                    {ingredientList[ingredientName].bases.map((element, i) => {
                        return (<li key={i}>{element}</li>)
                    })}

                    <li>Add more</li>
                </ul>

                <div className="buttons">
                    <CustomButton type="submit" onClick={handleSubmit}>Add to cart</CustomButton>
                </div>
            </div>
            <div className="food-choices">
                <p>{name.toUpperCase()}</p>

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
                                                ingredientList['Master_Ingredients_List'][item].map((ingredient, index) => {
                                                    // {console.log(ingredientList[ingredientName][item], ingredient,checkIgredientPresent(ingredientList[ingredientName][item], ingredient))}
                                                    return (
                                                    
                                                    <div className="dropdown-elements" key={index}>
                                                        
                                                        <RecipeCard
                                                            // image = {require(`${imageDir}/red onion.png`)} {"myClass " + (position === index ? 'active' : '')}
                                                            // className = {`${checkIgredientPresent(ingredientList[ingredientName][item], ingredient)}?'selected':'non-selected'`}
                                                            className = {`${checkIgredientPresent(ingredientList[ingredientName][item], ingredient)}`}
                                                            image = {require('../../components/RecipeDirectory/master_list_images/red onion.png')}
                                                            title = {ingredient}
                                                        />
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