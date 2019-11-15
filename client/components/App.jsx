import React from 'react'
import Navbar from './Navbar'
import { getUsers } from '../api/poke'
import Home from './Home'
import User from './User'
import CatchForm from './CatchForm'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Pokemon from './Pokemon';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: []
    }
  }


componentDidMount() {
  console.log('cdm')
  getUsers()
  .then(user => {
    console.log(user)
    this.setState({user})
  })
}



  render() {
  
  return (
  
    <Router>
     <div>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:id" render={(props)=> <User {...props} user=
      {this.state.user} />} />
      <Route exact path='/users/:id/:pokeName' component={Pokemon} />
      </div>
    </Router>
  
  )
  }
}

export default App
