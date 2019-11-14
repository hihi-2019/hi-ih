import React from 'react'


class User extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const user = this.props.user.find(user => {
            console.log(this.props.match.params.id)
            return user.userId == this.props.match.params.id
        })
        return (
        <div>
        <h1>This is the user page</h1>
        {user && user.name}
        
        </div>
        )
    }
}

export default User