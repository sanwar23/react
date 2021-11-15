import React from "react";

const User = (props) => {
  const editForm = () => {
    props.handleSubmit(props.users);
  }

  return (
    <div style={{ 'margin-top': '30px' }}>
      <h1>Filled Details</h1>
      <input type="button" value="Edit" onClick={editForm} />
      <table>
        <tr>
          <td>Name:</td>
          <td>{props.users.name}</td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>{props.users.address}</td>
        </tr>
        <tr>
          <td>Mobile:</td>
          <td>{props.users.mobile}</td>
        </tr>
        <tr>
          <td>College:</td>
          <td>{props.users.college}</td>
        </tr>
      </table>
    </div>
  )
}

export default User;