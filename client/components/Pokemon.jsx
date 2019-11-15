import React from 'react'
import { getPokeInfo } from '../api/poke'


class Pokemon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {
        abilities: []
      }
    }
  }


  componentDidMount() {
    let pokemon = this.props.match.params.pokeName

    getPokeInfo(pokemon)
      .then(pokemon => {
        const pokeObj = pokemon.body
        // console.log(pokeObj)

        this.setState({
          pokemon: {
            name: pokeObj.name,
            abilities: pokeObj.abilities,
            type: pokeObj.types[0].type.name,
            img: pokeObj.sprites.front_default,
            weight: pokeObj.weight
          }
        })
        console.log(this.state.pokemon.abilities)
      })
  }
  // getPokeInfo(this.props.url, pokeName)


  render() {
    let abilitiesArr = this.state.pokemon.abilities
    return (
      <React.Fragment >
        <h1>{this.state.pokemon.name}</h1>
        <img src={this.state.pokemon.img} width="30%"></img>
        <ul>
          <li>Type: {this.state.pokemon.type}</li>
          <li>Weight: {this.state.pokemon.weight}kg</li>
        </ul>
        <h3>Abilities</h3>
        <ul>
          {abilitiesArr.map((x) => { return <li>{x.ability.name}</li> })}
        </ul>

      </React.Fragment >
    )
  }
}

export default Pokemon