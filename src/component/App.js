import React, { Component } from "react"
import Form from "./Form";
import User from "./User";
import { Container } from '@mui/material';


class App extends Component {

  render() {
    return (
      <Container>
        <Form />
        <User />
      </Container>
    )
  }
}

export default App