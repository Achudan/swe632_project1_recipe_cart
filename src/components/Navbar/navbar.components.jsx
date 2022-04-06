import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './crown.svg';
import { ReactComponent as Bag } from './bag.svg';
import SearchBar from "../searchBar/searchBar.component";
import './navbar.styles.scss';
import RECIPE_DATA from '../RecipeDirectory/recipe_data'
// import { auth } from "../../firebase/firebase.utils";

const Navbar =  () =>(
    <div className='header'>
        <Link className='logo-container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className="options lefty">
            <Link className='option' to="/" >
                <span>TASTE BUDS</span>
            </Link>
            
        </div>
        
        <div className="options">
        <SearchBar className="option" placeholder="Enter dish name" data={RECIPE_DATA}/>
            <Link className="option" to="/ingredients/custom">BUILD YOUR OWN RECIPE</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            <Link className="option" to="/help">HELP</Link>
            {/* {
                currentUser?
                (<div className="option" onClick={()=>auth.signOut()}>{currentUser.displayName.toUpperCase()}</div>):
                (<Link className="option" to="/signinsignup">SIGN IN</Link>)
            } */}
            {/* {console.log('user',currentUser)} */}
            <Link className='logo-container' to="/cart" >
                <Bag className='bag' />
            </Link>
        </div>
        
    </div>
)

export default Navbar;