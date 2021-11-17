import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userAdd } from "../actions";
import { TextField, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


const Form = () => {
  const classes = useStyles()


  const initialState = {
    name: '',
    address: '',
    mobile: '',
    college: '',
    btn: 'Add',
    errors: {
      name: '',
      address: '',
      mobile: '',
      college: ''
    }
  }
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialState)

  const handleChange = (event) => {
    console.log('asdsadsad')
    const { name, value } = event.target
    console.log(name, value)

    switch (name) {
      case 'name':
        setUser({
          ...user,
          name: value,
          errors: {
            name: ((value.length < 0) ? 'Name should Not be empty !!' : ''),
          }
        })
        break
      case 'address':
        setUser({
          ...user,
          address: value,
          errors: {
            address: ((value.length < 0) ? 'Address should not be empty !!' : '')
          }
        })
        break;

      case 'mobile':
        var pattern = new RegExp(/^[0-9\b]+$/);
        setUser({
          ...user,
          mobile: value,
          errors: {
            mobile: !pattern.test(value) ? 'Invalid mobile number !!' : ''
          }
        })
        break;

      case 'college':
        setUser({
          ...user,
          college: value,
          errors: {
            college: value.length < 0 ? 'College should not be empty !!' : ''
          }
        })

        break;
      default:
        break;

    }
  }


  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => {
        console.log(val)
        if (val.length > 0) {
          valid = false
        }
      }
    );
    return valid;
  }

  const handleValidation = (user) => {
    let fields = user;
    let formIsValid = true;
    var nameError = '';
    var addressError = '';
    var mobileError = '';
    var collegeError = '';

    if (user.name === '') {
      nameError = 'Name should Not be empty !!';
      formIsValid = false;
    }

    if (user.address === '') {
      addressError = 'Address should Not be empty !!';
      formIsValid = false;
    }
    if (fields.college === '') {
      collegeError = 'College should Not be empty !!'
      formIsValid = false;
    }
    if (fields.mobile === '') {
      mobileError = 'Mobile should Not be empty !!'
      formIsValid = false;
    }

    setUser({
      ...user,
      errors: {
        name: nameError,
        address: addressError,
        mobile: mobileError,
        college: collegeError
      }
    })

    return formIsValid
  }

  const submitForm = () => {
    console.log(user);
    if (validateForm(user.errors)) {
      if (handleValidation(user)) {
        dispatch(userAdd(user));
        setUser(initialState)
      }
    }
  }

  const userEdit = useSelector(state => state.userRe);

  useEffect(() => {
    if (userEdit.btn === 'update') {
      setUser({
        ...user,
        btn: userEdit.btn,
        name: userEdit.name,
        address: userEdit.address,
        mobile: userEdit.mobile,
        college: userEdit.college
      })
    }
  }, [userEdit])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography
          variant="h3"
          component="h2"
          color="primary"
          gutterBottom
        >
          Add User
        </Typography>
      </Grid>
      <form noValidate autoComplete="off">
        <Grid item sm={12}>
          <TextField
            type="text"
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChange}
            value={user.name}
            fullWidth
            className={classes.field}
          />
          <Typography
            color="red"
            gutterBottom
          >
            {user.errors.name && <span className='error'>{user.errors.name}</span>}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <TextField
            type="text"
            label="Address"
            name="address"
            variant="outlined"
            onChange={handleChange}
            value={user.address}
            fullWidth
            className={classes.field}
          />
          <Typography
            color="red"
            gutterBottom
          >
            {user.errors.address && <span className='error'>{user.errors.address}</span>}
          </Typography>

        </Grid>
        <Grid item sm={12}>
          <TextField
            type="text"
            label="Mobile"
            name="mobile"
            variant="outlined"
            onChange={handleChange}
            value={user.mobile}
            fullWidth
            className={classes.field}
          />
          <Typography
            color="red"
            gutterBottom
          >
            {user.errors.mobile && <span className='error'>{user.errors.mobile}</span>}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <TextField
            type="text"
            label="College"
            name="college"
            variant="outlined"
            onChange={handleChange}
            value={user.college}
            fullWidth
            className={classes.field}
          />
          <Typography
            color="red"
            gutterBottom
          >
            {user.errors.college && <span className='error'>{user.errors.college}</span>}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Button
            type="button"
            variant="contained"
            size="large"
            onClick={submitForm}
          >
            {user.btn}
          </Button>
        </Grid>
      </form>
    </Grid>
  )
}

export default Form;