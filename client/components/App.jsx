import React from 'react'
import Navbar from './Navbar'
import { getUsers } from '../api/poke'


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
    console.log(user)
  })
}



  render() {
  return (
    <div>
      <Navbar/>
      <h1>React development has begun!</h1>
    </div>
  )
  }
}

export default App
