import React from 'react'
import { getUserPokemon } from '../api/poke'
import { Link } from 'react-router-dom'
import CatchForm from './CatchForm'

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: [],
            showForm: false
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

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        const selectedUser = this.props.user.find(user => {
            return user && user.user_id == this.props.match.params.id
        })

        return (selectedUser ? (
            <div>
                <h1>{selectedUser.name}</h1>
                <button onClick={this.toggleForm}>Catch a pokemon</button>
                {this.state.showForm && <CatchForm/>}
                <div className="container">
                    <div className="row">
                        {this.state.pokemon.map(pokemon => {
                            return <>
                                <div className="col-sm-5">
                                    <Link to={`${"/users/" + selectedUser.user_id + "/"}${pokemon.poke_name}`}>
                                        <img className="poke-img" src="/images/pokeball.png" />
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
        ) : "")
    }
}

export default User