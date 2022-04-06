import React from "react";
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const Menuitem = ({ title, imageURL, size, linkURL}) => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/ingredients/${linkURL}`);
    }
    return (
        
             <div className={`${size} menu-item`} onClick={handleClick} >
                <div className='background-image' style={{ backgroundImage: `url(${imageURL})` }} />
                <div>
                    <div className='content'>
                        <h1 className='title'>{title}</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>

                    <div  className='content'>
                        hdgiusdhhsgfsdghshg
                    </div>
                </div>
            </div>   
    );
}

export default Menuitem;