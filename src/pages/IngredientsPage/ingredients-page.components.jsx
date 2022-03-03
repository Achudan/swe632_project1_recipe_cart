import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ingredients-page.styles.scss';
import INGREDIENTS_DATA from "./ingredients-data";
import CustomButton from "../../components/CustomButton/custombutton-component";

import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import RecipeCard from '../../components/RecipeCard/recipe_card.component'
import CustomPopUp from "../../components/CustomPopUp/custompopup.components";

// const imageDir = '../../components/RecipeDirectory/master_list_images'
const IngredientsPage = () => {
    const { ingredientName } = useParams();
    const [ingredientList, setIngredientList] = useState(INGREDIENTS_DATA);
    const [isOpen, setIsOpen] = useState(false);
    const [isShopped, setIsShopped] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const cartPopup = () => {
        setIsShopped(!isShopped);
    }

    const handleSubmit = (elt) => {


        console.log(includedContents)
        if (includedContents.length === 0) {
            togglePopup()
        }
        else {
            
            cartPopup()
            //alert('Added to bag successfully');
        }
    }

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    function checkIgredientPresent(recipeArr, item) {
        let flag = false;
        recipeArr.forEach(elt => {
            elt = elt.toLowerCase()
            item = item.toLowerCase()
            if (item.includes(elt) === true) {
                flag = true;
                return;
            }
        })
        return (flag ? 'selected' : 'not-selected')
    }

    function updateState(ingredientList, ingredientName, ingredient, item) {
        let index = ingredientList[ingredientName][item].indexOf(ingredient)
        if (index === -1) {
            // {console.log(ingredientList[ingredientName][item])}
            ingredientList[ingredientName][item].push(ingredient)
            let newList = ingredientList[ingredientName][item]
            setIngredientList({
                ...ingredientList,
                ingredientName: {
                    item: newList
                }
            })
            // {console.log(ingredientList[ingredientName][item])}
            return
        }
        ingredientList[ingredientName][item].splice(index, 1);
        let newList = ingredientList[ingredientName][item]
        setIngredientList({
            ...ingredientList,
            ingredientName: {
                item: newList
            }
        })
    }

    var arr = [];
    Object.keys(ingredientList['Master_Ingredients_List']).forEach(function (key) {
        arr.push(key);
    });
    var includedContents = [];
    var name = ingredientName.replace('_', ' ')

    return (
        <div className="ingredients-page">
            <div className="product-details">
                <h1>{ingredientList[ingredientName].name}</h1>
                {/* <div> */}
                <span className="heading">Items in the bowl</span>
                <ul className="selected-list">
                    {
                        arr.map((item, index) => {
                            // console.log(item)
                            return (
                                <>
                                    <div className="sub-category" style={{'font-weight': 'bolder', 'paddingTop':'10px'}}>{item.toUpperCase()}</div>
                                    {ingredientList[ingredientName][item].map((element, i) => {
                                        includedContents.push(element) 
                                        return (<li key={i}>{element}</li>)
                                    }
                                    )}
                                </>
                            )
                        }

                        )

                        // ingredientList[ingredientName].bases.map((element, i) => {
                        //     return (<li key={i}>{element}</li>)
                        // })

                    }

                    {/* <li>Add more</li> */}
                </ul>
                {/* </div> */}

                <div className="buttons">
                    <CustomButton type="submit" onClick={handleSubmit}>Add to cart</CustomButton>
                </div>
                {isOpen && <CustomPopUp title='Empty Bowl' description='Please add contents in the bowl' handleClose={togglePopup} />}
                {isShopped && <CustomPopUp title='Recipe Items Added' description='Recipe Ingredients added to the cart successfully' handleClose={cartPopup} />}
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
                                            <h1>{item.toUpperCase()}</h1>
                                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                        </div>
                                        <div className="dropdown-container">
                                            {clicked === index ? (
                                                ingredientList['Master_Ingredients_List'][item].map((ingredient, index) => {
                                                    // {console.log(ingredientList[ingredientName][item], ingredient,checkIgredientPresent(ingredientList[ingredientName][item], ingredient))}
                                                    return (

                                                        <div className="dropdown-elements" key={index} onClick={() => (updateState(ingredientList, ingredientName, ingredient, item))}>
                                                            {/* {console.log(ingredient)} */}
                                                            <RecipeCard
                                                                className={`${checkIgredientPresent(ingredientList[ingredientName][item], ingredient)}`}
                                                                image={require(`../../components/RecipeDirectory/master_list_images/${item}/${ingredient}.png`)}
                                                                title={ingredient}
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