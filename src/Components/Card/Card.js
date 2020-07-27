import React, { Component } from 'react';

function Card({ pokemon }) {
	return (
		<div className="card">
			<div className="card-img">
				<img src={pokemon.sprites.front_default} alt={pokemon.name} />
				<img src={pokemon.sprites.back_default} alt={pokemon.name} />
			</div>
			<div className="card-name">
				<h3>{pokemon.name}</h3>
			</div>
			<div className="card-types">
				{pokemon.types.map(type => {
					return (
						<div className="poke-type">
							{type.type.name}
						</div>
					)
				})}

			</div>
			<div className="card-info">
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