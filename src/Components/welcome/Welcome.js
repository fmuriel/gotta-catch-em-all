import React from 'react';
import RunningPikachu from '../../assets/pikachu-main.gif';

class Welcome extends React.Component {
  goToPokedex = event => {
    event.preventDefault();
    this.props.history.push(`/pokedex`)
  }

  render() {
    return (
      <div>
        <h1>Welcome to my Pokedex!</h1>
        <img src={RunningPikachu} />
        <button onClick={this.goToPokedex}>Start!</button>
      </div>
    )
  }
}

export default Welcome;