import React from "react";
import { editUser } from '../actions'
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid, Button } from "@mui/material";

const User = () => {
  const users = useSelector(state => state.userRe);
  const dispatch = useDispatch();

  return (
    <Grid Container style={{
      marginTop:"20px"
    }}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          color="primary"
          gutterBottom
        >
          Filled Details
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          type="button"
          onClick={() => dispatch(editUser(users))}
          variant="contained"
        >
          Edit
        </Button>
      </Grid>

      <table>
        <tr>
          <td>
            <Typography
            color="primary"
              gutterBottom
            >
              Name:
            </Typography>
          </td>
          <td><Typography
          color="secondary"
            gutterBottom
          >{users.name}</Typography></td>
        </tr>
        <tr>
          <td><Typography
          color="primary"
            gutterBottom
          >Address:</Typography></td>
          <td><Typography
          color="secondary"
            gutterBottom
          >{users.address}</Typography></td>
        </tr>
        <tr>
          <td><Typography
          color="primary"
            gutterBottom
          >Mobile:</Typography></td>
          <td><Typography
          color="secondary"
            gutterBottom
          >{users.mobile}</Typography></td>
        </tr>
        <tr>
          <td><Typography
          color="primary"
            gutterBottom
          >College:</Typography></td>
          <td><Typography
          color="secondary"
            gutterBottom
          >{users.college}</Typography></td>
        </tr>
      </table>
    </Grid>
  )
}

export default User;