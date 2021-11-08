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
    updated:[],
    btn: 'Add'
  };


  handleSubmit = (character) => {
    console.log(character);
    this.setState({
      updated: character,
      
    })
    console.log(character);
  }

  handleEdit = (user) => {
    console.log(user);
    this.setState({
      characters:user,   
      btn: 'Update'   
    })
    console.log(this.state);
  }

  componentDidUpdate(){

  }


  render(){

      return (
        <div className="container" >
          {/* <Table characterData={characters} removeCharacter={this.removeCharacter} />  handleEdit={this.handleEdit}*/}
          
          <Form  users={this.state.updated} btn={this.state.btn} handleSubmit={this.handleSubmit} />
          <User  users={this.state.updated} handleSubmit={this.handleEdit} />
        </div>
      )
    }
  }

export default App