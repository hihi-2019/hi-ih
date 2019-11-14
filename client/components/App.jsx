import React from 'react'
import Navbar from './Navbar'
import { getUsers } from '../api/poke'
import Home from './Home'
import User from './User'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


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
  })
}



  render() {
  
  return (
    <Router>
     <div>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      </div>
    </Router>
  
  )
  }
}

export default App
