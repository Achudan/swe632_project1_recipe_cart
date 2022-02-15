import React from "react";
import './recipe_card.styles.scss'

const RecipeCard = (props) =>(
    <div className={`card ${props.className}`}>
      <div className="card__body">
        <img src={props.image} className="card__image" alt='recipe'/>
        <p className="card__title">{props.title}</p>
        <p className="card__description">{props.description}</p>
      </div>
      {/* <button className="card__btn">View Recipe</button> */}
    </div>
)

export default RecipeCard
