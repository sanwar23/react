import React, {Component } from "react"
import Form from "./Form";
// import Table from "./Table"
import User from "./User";

class App extends Component {
  constructor(){
    super()
    console.log('call construtor');
  }


  state = {
    characters: [],
    updated:[]
  };


  handleSubmit = (character) => {
    console.log(character);
    this.setState({
      updated: character,
    })
  }

  handleEdit = (user) => {
    console.log(user);
    this.setState({
      characters:user
    })
    console.log(this.state);
  }

  componentDidUpdate(){

  }


  render(){

      return (
        <div className="container" >
          {/* <Table characterData={characters} removeCharacter={this.removeCharacter} />  handleEdit={this.handleEdit}*/}
          
          <Form  users={this.state.updated} handleSubmit={this.handleSubmit} />
          <User  users={this.state.updated} handleSubmit={this.handleSubmit} />
        </div>
      )
    }
  }

export default App