import React, { Component } from 'react';
import './Pokedex.css'
import Pokemon from './Pokemon';
import data from './data';
import FilterButton from './FilterButton';

class Pokedex extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handlePokemonType = this.handlePokemonType.bind(this);
    this.handleAllPokemons = this.handleAllPokemons.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
    this.state = {
      currentIndex: 0,
      pokemonType: 'Fire',
      Pokemons: [...data],
    };
  }

  // dentro do tipo selecionado navegar para o proximo
  // como acessar cada tipo de pokemon -> data.type
  // dentro de data.type filtrar os elementos de acordo com o click
  // chamar handleClick dentro de handlePokemonType
  // colocar o tipo de pokemon dentro de uma variavel?
  // pra a partir dai de acordo com o click mudar a atribuição?
  componentDidMount() {
    const { pokemonType } = this.state;
    this.setState({ Pokemons: data.filter((element) => element.type === pokemonType) });
  }

  componentDidUpdate(_prevProps, prevState) {
    this.filterFunction(prevState);
  }

  handleClick() {
    const { Pokemons, currentIndex } = this.state;
    this.setState((previousState) => ({ // this.setState é assincrono
      currentIndex: previousState.currentIndex + 1,
    }));
    if (currentIndex >= Pokemons.length - 1) {
      this.setState({
        currentIndex: 0,
      });
    }
  }

  handlePokemonType(event) {
    this.setState({
      pokemonType: event.target.value,
    });
  }

  handleAllPokemons() {
    this.setState({
      Pokemons: [...data],
    });
  }

  filterFunction(prevState) {
    const { pokemonType } = this.state;
    if (prevState.pokemonType !== pokemonType) {
      console.log(pokemonType);
      this.setState({ 
        Pokemons: data.filter((element) => element.type === pokemonType),
        currentIndex: 0,
      });
    }
  }

  render() {
    const { Pokemons, currentIndex, pokemonType } = this.state;
    const type = ["Fire", "Psychic", "Electric", "Bug", "Poison", "Normal"];

    return (
      <div className="pokedex-container">
          <div className="pokedex-background">
          
          </div>
        <div className="pokemons-container">
          {
        Pokemons.filter((element, index) => index === currentIndex)
          .map((element, i) => <Pokemon key={i} props={element} />)
        }

        </div >
        <div className="pokemon-type-container">
          { type.map((type) => {
            return(
            <FilterButton
              disabled={pokemonType === type}
              onClick={(event) => this.handlePokemonType(event)}
              props={type}
              value={type}
              key={type}
              className={`pokemon-${type}-button`}
            />
            )
          })}
        </div>
        <div className="navigation-button-container-1">
          <div className="navigation-button-container-2">
            <button 
            type="button" 
            disabled={Pokemons.length === 1} 
            onClick={this.handleClick}
            className="next-button"
            >
              Next
            </button>
            <button
              type="button"
              onClick={this.handleAllPokemons}
              className="all-pokemon-button"
              >
              All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;