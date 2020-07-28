import React, { Component } from 'react';
import './Card.scss';

const Card = ( {pokemon} ) => {
  const { name, sprites, types, weight, height, abilities } = pokemon;
  const spritesFront = sprites.front_default;
  const spritesBack = sprites.back_default;

	return (
		<div className="card">
			<h3 className="poke-name">
        <span className="poke-name"></span>
         {name}</h3>
			<div className="avatar">
				<img src={spritesFront} alt={pokemon.name} />
				<img src={spritesBack} alt={pokemon.name} />
			</div>

			<div className="poke-types">
				{types && types?.map(type => {
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
					<p>{weight}</p>
				</div>

				<div className="poke-height">
					<h4>Height</h4>
					<p>{height}</p>
				</div>

				<div className="poke-ability">
					<h4>Ability</h4>
					<p>{abilities.map(key => {
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