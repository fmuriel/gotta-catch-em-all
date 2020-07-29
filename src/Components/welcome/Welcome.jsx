import React from 'react';
import RunningPikachu from '../../assets/images/pikachu-main.gif';
import PokemonLogo from '../../assets/images/pokemon-logo.png';
import '../../App.scss';
import './Welcome.scss';


class Welcome extends React.Component {
  goToPokedex = event => {
    event.preventDefault();
    this.props.history.push(`/pokedex`)
  }

  render() {
    return (
      <div className='poke-welcome'>
        <img className="poke-logo" src={PokemonLogo} alt="Pokemon logo" />
        <h1>Welcome <br />to my Pokedex</h1>
        <img className="run-pika" src={RunningPikachu} alt="Running Pikachu" />
        <button className="new-game" onClick={this.goToPokedex}>New Game</button>
        <p>&copy; 2020 FMURIEL inc.</p>
      </div>
    )
  }
}

export default Welcome;