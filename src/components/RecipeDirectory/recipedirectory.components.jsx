  
import React, { useState } from "react";
import Menuitem from "../Menu-item/menu-item.components";
import './recipedirectory.styles.scss'
import RECIPE_DATA from './recipe_data'
const RecipeDirectory = () => {
    const [recipes] = useState(RECIPE_DATA);

    return (
        <div className='directory-menu'>
            {recipes.map(
                ({ id, ...recipeOptions }) => (
                    <Menuitem key={id} {...recipeOptions}/>
                )
            )}
        </div>
    );
};

export default RecipeDirectory;