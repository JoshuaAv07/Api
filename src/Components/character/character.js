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
                    to={`${character.url}`}
                >
                    <img 
                        className= "Character__image"
                        src={props.character.image} 
                        alt={props.character.name}
                    />
                </Link>
                    <div className="Character__Data">
                        <h2 className = "Character__name">{props.character.name}</h2>
                        <p className = "Character__species">No: {props.character.url}</p>
                        <p className = "Character__status">{props.character.birth_year}</p>
                        <small>{props.character.birth_year}</small>
                        <small>{props.character.homeworld}</small>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Character;
