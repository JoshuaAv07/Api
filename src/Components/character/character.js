import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
            <div class="Characters">
                <div className = "Character__container">
                <Link 
                    className="Character__image"
                    to={`/character/${character.id}`}
                >
                    <img 
                        className= "Character__image"
                        src={props.character.image} 
                        alt={props.character.name}
                    />
                </Link>
                    <div className="Character__Data">
                        <h2 className = "Character__name">{props.character.name}</h2>
                        <p className = "Character__species">Gender: {props.character.gender}</p>
                        <p className = "Character__status">Hair: {props.character.hair_color}</p>
                        <p className = "Character__status">Eyes: {props.character.skin_color}</p>
                        <p>Height: {props.character.height}</p>
                        <p>Weight: {props.character.mass}</p>
                        <small>{props.character.birth_year}</small>
                        <small>{props.character.homeworld}</small>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Character;
