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
            <h1>{user && user.name}</h1>
            <div className="container">
            <div className="row">
                {this.state.pokemon.map(pokemon =>{
                    return <>
                    <div className="col-sm-5">
                        <img className="poke-img" src="./images/pokeball.png"></img><h2>{pokemon.poke_name}</h2>
                    </div>
                    </>
                })}
                </div>
            </div>
            
        </div>
        )
    }
}

export default User