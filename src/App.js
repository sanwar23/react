import React, { useState } from "react"
import Form from "./Form";
import User from "./User";

const App = () => {
  const iniState = {
    characters: [],
    updated: [],
    btn: 'Add'
  };

  const [state1, setState1] = useState(iniState)

  const handleSubmit = (character) => {
    
    setState1({
      updated: character,
    })
    /* console.log(character);
    this.setState({
      updated: character,

    }) */
    console.log(character);
  }

  const handleEdit = (user) => {
    console.log(user);
    setState1({
      characters: user,
      updated: user,
      btn: 'Update'
    })
    /* this.setState({
      characters: user,
      btn: 'Update'
    })
    console.log(this.state); */
  }
  console.log(state1);

  return (
    <div className="container" >
      <Form users={state1.characters} btn={state1.btn} handleSubmit={handleSubmit} />
      <User users={state1.updated} handleSubmit={handleEdit} />
    </div>
  )
}



/* class App extends Component {
  
  
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
        
          
          <Form  users={this.state.updated} btn={this.state.btn} handleSubmit={this.handleSubmit} />
          <User  users={this.state.updated} handleSubmit={this.handleEdit} />
        </div>
      )
    }
  } */

export default App