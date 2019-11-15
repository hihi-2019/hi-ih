import React from 'react'
import { getPokeInfo } from '../api/poke'


class Pokemon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
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
      })
  }
  // getPokeInfo(this.props.url, pokeName)


  render() {
    let abilitiesArray = this.state.pokemon.abilities
    console.log(abilitiesArray)
    return (
      <React.Fragment >
        <h1>hello</h1>
        <img src={this.state.pokemon.img}></img>
        <ul>
          <li>{this.state.pokemon.name}</li>
          <li>{this.state.pokemon.type}</li>

          <li>{this.state.pokemon.weight}</li>
        </ul>
        <ul>{abilitiesArray.map(x => {
          return <li>x.ability.name</li>
        })}</ul>
        {/* <ul>
          {this.state.pokemon.abilities}.map(x => return <li>x.ability.name</li>)
          </ul> */}

      </React.Fragment >
    )
  }
}

export default Pokemon