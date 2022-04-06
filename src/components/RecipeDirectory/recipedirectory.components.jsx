  
import React, { useState } from "react";
import Menuitem from "../Menu-item/menu-item.components";
import './recipedirectory.styles.scss'
import RECIPE_DATA from './recipe_data'
import SearchBar from "../searchBar/searchBar.component";
import NewSearch from "../searchBar/newSearch.component";
import '../searchBar/searchBar.styles.scss'
const RecipeDirectory = () => {
    const [recipes] = useState(RECIPE_DATA);
    const [searchField, setField] = useState('');
    const handleChange = (event) =>{
        setField(event)
    }
    const filteredMonster = recipes.filter( item => item.title.toLowerCase().includes(searchField.toLocaleLowerCase()));
    console.log(filteredMonster)
    return (
        <>
        <div className="search input">
                <input value={searchField} onChange={e => handleChange(e.target.value)} placeholder='Enter your option'/>
            </div>
        
        <div className='directory-menu'>
            
            
            
            {filteredMonster.map(
                ({ id, ...recipeOptions }) => (
                    <Menuitem key={id} {...recipeOptions}/>
                )
            )}
        </div>
        </>
    );
};

export default RecipeDirectory;