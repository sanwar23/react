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
  }

  const handleEdit = (user) => {
    console.log(user);
    setState1({
      characters: user,
      updated: user,
      btn: 'Update'
    })
  }
  console.log(state1);

  return (
    <div className="container" >
      <Form users={state1.characters} btn={state1.btn} handleSubmit={handleSubmit} />
      <User users={state1.updated} handleSubmit={handleEdit} />
    </div>
  )
}

export default App