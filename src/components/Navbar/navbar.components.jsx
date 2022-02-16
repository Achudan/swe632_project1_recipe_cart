import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './crown.svg';
import { ReactComponent as Bag } from './bag.svg';
import './navbar.styles.scss';
// import { auth } from "../../firebase/firebase.utils";

const Navbar =  () =>(
    <div className='header'>
        <Link className='logo-container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to="/ingredients/custom">CUSTOM</Link>
            <Link className="option" to="/contact">CONTACT</Link>
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