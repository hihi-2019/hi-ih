import React from 'react'
import Navbar from './Navbar'
import { getUsers } from '../api/poke'
import {Link} from 'react-router-dom'


class App extends React.Component {
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
    console.log(this.state.user)
  })
}



  render() {
   let userArray = this.state.user
  return (
    <div>
      <Navbar/>
      <h1>Pokemon</h1>
      {userArray.map(user =>{
       return <>
       <a href="#"><p>{user.name}</p></a>
       <img src="/images/picture.jpg" width="30" height="30"/>
       </>

      })}
    </div>
  )
  }
}

export default App
