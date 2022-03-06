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
                    to={`character/${character.id}`}
                >
                    <h2 className = "Character__name">{props.character.name}</h2>
                </Link>
                    <div className="Character__Data">
                        <p className = "Character__status">Gender: {props.character.gender}</p>
                        <p className = "Character__status">Hair: {props.character.hair_color}</p>
                        <p className = "Character__status">Eyes: {props.character.skin_color}</p>
                        <p className = "Character__status">Height: {props.character.height}</p>
                        <p className = "Character__status">Weight: {props.character.mass}</p>
                        <p className = "Character__status">Birth: {props.character.birth_year}</p>
                        <small>{props.character.homeworld}</small>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Character;
