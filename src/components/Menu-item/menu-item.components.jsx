import React from "react";
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const Menuitem = ({ title, Description, imageURL, size, linkURL }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/ingredients/${linkURL}`);
    }
    return (

        <div className={`${size} menu-item`} onClick={handleClick} >
            <div className='background-image' style={{ backgroundImage: `url(${imageURL})` }} />
            <div className="table">
                <div className="table-row">
                    <div className='content'>
                        <h1 className='title'>{title}</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div >
                    <div className='content'>{Description}</div>
                </div>
            </div>
        </div>
    );
}

export default Menuitem;