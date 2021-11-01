import React, {Component } from "react"
import Table from "./Table"


removeCharacter = (index) => {
  const {characters} = this.state
  this.setState({
    characters:characters.filter((character,i) => {
      return i !== index
    }),
  })
}



class App extends Component {
    render(){

      state = {
        characters:[
        ]
      }

      const { characters } = this.state

     /*    const characters = [{
            name: 'Charlie',
            job: 'Janitor',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'Dee',
            job: 'Aspring actress',
          },
          {
            name: 'Dennis',
            job: 'Bartender',
          }
        ] */

      return (
        <div className="container" >
          <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        </div>
      )
    }
  }

export default App