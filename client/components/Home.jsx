import React from 'react'
import { getUsers } from '../api/poke'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import User from './User'

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: []
    }
  }


componentDidMount() {
  
  getUsers()
  .then(user => {
    this.setState({user})
    console.log("im here")
    console.log(this.state.user)
    
  })
}



  render() {
   let userArray = this.state.user
   let userId = this.state.user.userId
  
  return (
    <div>
      <h1>Pokemon</h1>
      {userArray.map(user =>{
       return <> 
       <Link to={'/'+user.userId} user={user.id}><p>{user.name}</p></Link>
       <a href="#"><p>{user.name}</p></a>
       <img src="/images/picture.jpg" width="30" height="30"/>
       </> 
      })}
      
    </div>
   
  )
  }
}

export default Home
