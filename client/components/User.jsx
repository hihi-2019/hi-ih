import React from 'react'
import { getUserPokemon } from '../api/poke'
import { Link } from 'react-router-dom'

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: [],
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
        // console.log("This is the user id" + user.user_id)
        const url = "/users/" + user.user_id + "/"
        console.log(url)

        return (
            <div>
                <h1>{user && user.name}</h1>
                <div className="container">
                    <div className="row">
                        {this.state.pokemon.map(pokemon => {
                            return <>
                                <div className="col-sm-5">
                                    <Link to={`${url}${pokemon.poke_name}`}>
                                        <img className="poke-img" src="https://cdn.shopify.com/s/files/1/1756/9559/products/pokeball_coaster_photo_33c69500-8564-4842-a2a7-3803975a2d3b_480x480.jpg?v=1557064432" />
                                        <p>
                                            {pokemon.poke_name}
                                        </p>
                                    </Link>
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