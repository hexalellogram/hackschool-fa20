import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import Move from '../Move';
import './style.css';

const PokemonCard = (props) => {
    const displayedMoves = props.moves.map((move, key) => {
        return <Move key={key} type={move.type} name={move.name} power={move.power}></Move>
    });

    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <CanvasDraw
                    hideGrid={true}
                    disabled={true}
                    hideInterface={true}
                    saveData={props.image}
                />
                <div className="pokemoncard-data-container">
                    <p className="pokemoncard-name">{props.name}</p>
                    <p className="pokemoncard-description">{props.description}</p>
                    <p className="pokemoncard-types">
                        <span className="pokemon-type-1" style={{color: "#000000"}}>{props.type1}</span>
                        <span className="pokemon-type-2" style={{color: "#000000"}}>{props.type2}</span>
                    </p>
                    <p className="pokemoncard-bold">Moves:</p>
                    <table className="moves-table">
                        <tbody>
                            {displayedMoves}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;