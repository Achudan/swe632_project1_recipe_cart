import React from "react";

const NewSearch = (props) =>(
    <input className="search-box" placeholder={props.placeholder} onChange={props.handleChange}/>
);

export default NewSearch;