import React from 'react'
import {getUserPokemon} from '../api/poke'

class User extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            pokemon : [],            
        }
    }


componentDidMount() {
    getUserPokemon(this.props.match.params.id)
    .then(poke => {
        this.setState({
            pokemon: poke.body,
        }
    )
    })
    
}


    render() {
        const user = this.props.user.find(user => {
            return user.user_id == this.props.match.params.id
           })
        
        return (
        <div>
            <h1>This is the user page</h1>
            <h2>{user && user.name}</h2>
            {this.state.pokemon.map(pokemon =>{
                console.log(pokemon)
                return <p>{pokemon.poke_name}</p>
            })}
        </div>
        )
    }
}

export default User