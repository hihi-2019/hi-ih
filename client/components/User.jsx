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
            <div className="container">
            <div className="row">
                {this.state.pokemon.map(pokemon =>{
                    return <>
                    <div className="col-sm-5">
                        <img className="poke-img" src="https://cdn.shopify.com/s/files/1/1756/9559/products/pokeball_coaster_photo_33c69500-8564-4842-a2a7-3803975a2d3b_480x480.jpg?v=1557064432"></img><p>{pokemon.poke_name}</p>
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