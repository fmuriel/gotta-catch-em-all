import React, { Component } from 'react';
import './Card.scss';

const Card = ({ pokemon }) => {

	return (
		<div className="card">
			<h3 className="poke-name">
        <span className="poke-name"></span>
         {pokemon.name}</h3>
			<div className="avatar">
				<img src={pokemon.sprites.front_default} alt={pokemon.name} />
				<img src={pokemon.sprites.back_default} alt={pokemon.name} />
			</div>

			<div className="poke-types">
				{pokemon.types.map(type => {
					return (
						<div className="poke-type" type={type.type.name} >
							{type.type.name}
						</div>
					)
				})}
			</div>

			<div className="poke-info">
				<div className="poke-weight">
					<h4>Weight</h4>
					<p>{pokemon.weight}</p>
				</div>

				<div className="poke-height">
					<h4>Height</h4>
					<p>{pokemon.height}</p>
				</div>

				<div className="poke-ability">
					<h4>Ability</h4>
					<p>{pokemon.abilities.map(key => {
					return (
						<div className="poke-type">
							{key.ability.name}
						</div>
					)
				})}</p>
				</div>
			</div>

		</div>
	)
}

export default Card;