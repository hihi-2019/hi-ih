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
    // console.log("im here")
    // console.log(this.state.user)
    
  })
}



  render() {
   let userArray = this.state.user
  
  return (
    <div>
      <h1>Pokemon</h1>
      <div className="container">
      <div className='row'>
      {userArray.map(user =>{
       return <> 
         
           <div className="col-sm-3">
            <Link to={'/'+user.user_id} user={user.id}><p>{user.name}</p></Link>
            <img src="/images/trainer.png" width="150" height="150"/>
           </div>
        
        
       
       
       </> 
      })}
      </div>
      </div>
      
      
    </div>
   
  )
  }
}

export default Home
