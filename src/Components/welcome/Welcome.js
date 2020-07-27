import React from 'react';
import RunningPikachu from '../../assets/images/pikachu-main.gif';
import PokemonLogo from '../../assets/images/pokemon-logo.png';
import './Welcome.scss';

class Welcome extends React.Component {
  goToPokedex = event => {
    event.preventDefault();
    this.props.history.push(`/pokedex`)
  }

  render() {
    return (
      <div className='poke-welcome'>
        <img className="poke-logo" src={PokemonLogo} />
        <h1>Welcome to my Pokedex</h1>
        <img className="run-pika" src={RunningPikachu} />
        <button onClick={this.goToPokedex}>New Game</button>
        <p>&copy; 2020 FMURIEL inc.</p>
      </div>
    )
  }
}

export default Welcome;