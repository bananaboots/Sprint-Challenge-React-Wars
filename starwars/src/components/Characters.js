import React from 'react';
import './StarWars.css';
import Card from './Card';

function Characters(props) {
    return (
        <div className="row">
            {props.charactersArray.map(x => <Card
                name={x.name}
                gender={x.gender}
                birthYear={x['birth_year']}
                eyeColor={x['eye_color']}
                hairColor={x['hair_color']}
                height={x.height}
                mass={x.mass}
                species={x.species}
                homeWorld={x.homeworld}
                starShips={x.starships}
                films={x.films}
            />)}
        </div>
    );
}

export default Characters;