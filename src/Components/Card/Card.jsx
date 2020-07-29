import React from 'react';
import './Card.scss';
import '../../App.scss';

const Card = ({ pokemon }) => {
  const { name, sprites, types, height, weight, abilities } = pokemon;
  const spriteFront = sprites.front_default;
  const spriteBack = sprites.back_default;

	return (
		<div className={`card ${types[0].type.name}`}>
			<h3 className="poke-name">{name}</h3>
			<div className="avatar">
				<img src={spriteFront} alt={name} />
				<img src={spriteBack} alt={name} />
			</div>

			<div className="poke-types">
				{types.map(type => {
					return (
						<p className="poke-type" className={type.type.name} >
							{type.type.name}
						</p>
					)
				})}
			</div>

			<div className="poke-info">
				<div className="poke-ability">
					<h4>Abilities</h4>
					{abilities.map(key => {
					return (
            <p key={key}>{key.ability.name}</p>					
            )
				})}
				</div>
			</div>

		</div>
	)
}

export default Card;