import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
    state = {
      pokemon: [],
      highlightedPokemon: {}
    };

    // set up cDM, set 'data' to the pokemon state
    componentDidMount() {
      console.log("App: Component Did Mount");
      // this is to mimic an API call taking 2 seconds to run
      setTimeout(()=>{
        console.log("App: gets data");
        this.setState({
          pokemon:data
        });
      }, 2000)
    }

    componentDidUpdate(prevProps, prevState) {
      // only run if this.state.pokemon has been changed
      if(this.state.pokemon !== prevState.pokemon) { // tells us that our pokemon state has changed
        console.log('App: Component Did Update/ re-render, pokemon state updated')
      }

      if(this.state.highlightedPokemon !== prevState.highlightedPokemon) {
        // only run if this.state.highlightedPokemon has changed
        console.log('App: Component Did Update/ re-render, highlightedPokemon state updated')
      }
    }

  render() {
    console.log("App: Component Renders");

    // if(this.state.pokemon.length === 0) {
    //   return<h3>Loading Pokemon Deck ...</h3>
    // }

    return (
      <div className="App">
        {/* Terrenary Operator if data is empty render loading deck otherwise render the Pokemon component */}
        {this.state.pokemon.length === 0 ? <h3>Loading Pokemon Deck ...</h3> : <Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;
