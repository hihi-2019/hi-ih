import React from 'react'
import {getUserPokemon} from '../api/poke'

class User extends React.Component {
    constructor(props){
        super(props)
    }


componentDidMount() {
    getUserPokemon(this.props.match.params.id)
    .then(pokemon => {
        console.log(pokemon)
    })
}


    render() {
        const user = this.props.user.find(user => {
            console.log(this.props.match.params.id)
            return user.userId == this.props.match.params.id
        })
        return (
        <div>
        <h1>This is the user page</h1>
        <h2>{user && user.name}</h2>
        
        </div>
        )
    }
}

export default User