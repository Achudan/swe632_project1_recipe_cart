  
import React, { useEffect, useState } from "react";
import Menuitem from "../Menu-item/menu-item.components";
import './recipedirectory.styles.scss'
import RECIPE_DATA from './recipe_data'
// import SearchBar from "../searchBar/searchBar.component";
// import NewSearch from "../searchBar/newSearch.component";
import '../searchBar/searchBar.styles.scss'
import axios from 'axios';

const RecipeDirectory = () => {
    const [recipes, setRecipes] = useState(RECIPE_DATA);
    const [searchField, setField] = useState('');
    const [data, setData] = useState({});
    const [ setLoading] = useState(false);

    const handleChange = (event) =>{
        setField(event)
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data: response } = await axios.get('http://localhost:5006/listings');
            setData(response);
            setRecipes(response)
            console.log(data);
            
          } catch (error) {
            console.error(error)
          }
          setLoading(false);
        };
    
        fetchData();
      }, []);
      
    const filteredMonster = recipes.filter( item => item.title.toLowerCase().includes(searchField.toLocaleLowerCase()));
    console.log(filteredMonster)
    return (
        <>
        <div className="search input">
                <input value={searchField} onChange={e => handleChange(e.target.value)} placeholder='Find your dish'/>
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