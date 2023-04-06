import React, { Component } from 'react'
import Table from './Table'


class App extends Component {
  render() {

    const characters = [
      {
        name: 'Yash',
        job: 'Software Engineer',
      },
      {
        name: 'Virika',
        job: 'Doctor',
      }

    ]

    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table characterData = {characters}/>
      </div>
    )
  }
}

export default App