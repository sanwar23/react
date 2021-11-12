import React, { useEffect, useState } from "react";

const Form = (props) => {
	console.log(props)
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

	const [user, setUser] = useState(initialState)

  useEffect(() => {
    
    console.log(props.users);

    if(props.btn === 'Update'){
      console.log('render---------------')
      setUser({
        ...user,
       name: props.users.name,
        address: props.users.address,
       mobile: props.users.mobile,
       college: props.users.college
      })
      
    }
  },[user.name])


 /*  console.log(props.users.length)
  if(props.users.length > 0){
    console.log('------------------',props.users)
    setUser({
      ...user,
      name:props.user.name
    })
  }
 */


	console.log(user)
	const handleChange = (event) => {
		console.log('asdasdasdasdsadasdasdasd')
		const { name, value } = event.target
		console.log(name, value)
		// let errors = user.errors;

		switch (name) {
			case 'name':
				setUser({
					...user,
					name: value,
					errors: {
						name: ((value.length < 0) ? 'Name should Not be empty !!' : ''),
					}
					// errors.name : (value.length < 0 )? 'Name should Not be empty !!' : '';

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
				// errors.address = value.length < 0 ? 'Address should not be empty !!' : '';
				break;

			case 'mobile':
				var pattern = new RegExp(/^[0-9\b]+$/);
				// errors.mobile = !pattern.test(value) ? 'Invalid mobile number !!' : '';
				setUser({
					...user,
					mobile: value,
					errors: {
						mobile: !pattern.test(value) ? 'Invalid mobile number !!' : ''
					}
				})
				break;

			case 'college':
				// errors.college = value.length < 0 ? 'College should not be empty !!' : '';
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
		console.log(errors)
		Object.values(errors).forEach(
			(val) => {
				console.log(val)
				if (val.length > 0) {
					valid = false
				}
			}
		);
		console.log(valid)
		return valid;
	}

const handleValidation = (user) => {
		// let errors = user.errors;
		let fields = user;
		let formIsValid = true;
		console.log(user)	
		if(user.name === ''){
			setUser({
				...user,
				errors: {
					name: 'Name should Not be empty !!'
				}
			})
			console.log(user);
			// errors.name ='Name should Not be empty !!';
				formIsValid = false;
		}

		if(user.address === ''){
			setUser({
				...user,
				errors: {
					address: 'Address should Not be empty !!'
				}
			})
			console.log(user);
			// errors.address ='Address should Not be empty !!';
				formIsValid = false;
		}

		if(fields.mobile === ''){
			setUser({
				...user,
				errors: {
					mobile: 'Mobile should Not be empty !!'
				}
			})
			console.log(user);
			// errors.mobile ='Mobile should Not be empty !!';
				formIsValid = false;
		}

		if(fields.college === ''){
			setUser({
				...user,
				errors: {
					college: 'College should Not be empty !!'
				}
			})
			console.log(user);
				// errors.college ='College should Not be empty !!';
				formIsValid = false;
		}
	
		// this.setState({ errors: errors });
		return formIsValid
	
}

	const submitForm = () => {
		if (validateForm(user.errors)) {
			if (handleValidation(user)) {
				console.log('valid form')
				props.handleSubmit(user)
				setUser(initialState)
			}
		} else {
			console.log('Invalid form')
		}

		// console.log(this.state);
	}

	return (
		<div>
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" value={user.name} onChange={handleChange} />
				{user.errors.name && <span className='error'>{user.errors.name}</span>}

				<label htnlFor="address">Address</label>
				<input type="text" name="address" id="address" value={user.address} onChange={handleChange} />
				{user.errors.address && <span className='error'>{user.errors.address}</span>}

				<label htmlFor="mobile">Mobile</label>
				<input type="text" name="mobile" id="mobile" value={user.mobile} onChange={handleChange} />
				{user.errors.mobile && <span className='error'>{user.errors.mobile}</span>}

				<label htmlFor="college">College</label>
				<input type="text" name="college" id="college" value={user.college} onChange={handleChange} />
				{user.errors.college && <span className='error'>{user.errors.college}</span>}

				<input type="button" value={user.btn}  onClick={submitForm}  />
			</form>


		</div>
	)
}



/* class Form extends Component {

		initialState = {
				name: '',
				address: '',
				mobile: '',
				college: '',
				btn:'Add',
				errors: {
						name: '',
						address: '',
						mobile: '',
						college: ''
				}
		}
		state = this.initialState;

		submittedValue = []


		handleChange = (event) => {

				const { name, value } = event.target

				let errors = this.state.errors;
				switch (name) {
						case 'name':
								errors.name = (value.length < 0 || value === '' )? 'Name should Not be empty !!' : '';
								break
						case 'address':
								errors.address = value.length < 0 ? 'Address should not be empty !!' : '';
								break;

						case 'mobile':
								var pattern = new RegExp(/^[0-9\b]+$/);

								errors.mobile = !pattern.test(value) ? 'Invalid mobile number !!' : '';
								break;

						case 'college':
								errors.college = value.length < 0 ? 'College should not be empty !!' : '';
								break;
						default:
								break;

				}

				this.setState({ errors, [name]: value }, () => {
						console.log(errors);
				})
		}


		validateForm = (errors) => {

				let valid = true;
						console.log(errors);
						console.log( Object.values(errors));
				Object.values(errors).forEach(
						(val) => {
								if(val.length > 0){
										valid = false
								}
						}
				);
				console.log(valid)
				return valid;
		}

		submitForm = (event) => {
				event.preventDefault();
			  
				if (this.validateForm(this.state.errors)) {
						console.log('valid form')
						if( this.handleValidation()){
								this.props.handleSubmit(this.state)
								this.setState(this.initialState)
						}
				} else {
					  
						console.log('Invalid form')
					  
				}

				console.log(this.state);
		}

		handleValidation = (event) => {
				let errors = this.state.errors;
				let fields = this.state;
				let formIsValid = true;

				if(fields.name === ''){
						errors.name ='Name should Not be empty !!';
						formIsValid = false;
				}

				if(fields.address === ''){
						errors.address ='Address should Not be empty !!';
						formIsValid = false;
				}

				if(fields.mobile === ''){
						errors.mobile ='Mobile should Not be empty !!';
						formIsValid = false;
				}

				if(fields.college === ''){
						errors.college ='College should Not be empty !!';
						formIsValid = false;
				}
		  
				this.setState({ errors: errors });
				return formIsValid
		  
		}


		componentDidMount() {
				console.log(this.state);
		}
		componentWillReceiveProps(nextProps, nextState) {
			  
				if (this.state !== nextProps.users) {
						this.setState(
								nextProps.users,
						)
						this.setState({btn: nextProps.btn});
				}
		}

		render() {

				const { name, address, mobile, college,btn } = this.state;
				const { errors } = this.state;
				return (
						<div>
								<form>
										<label htmlFor="name">Name</label>
										<input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
										{errors.name.length > 0 && <span className='error'>{errors.name}</span>}

										<label htnlFor="address">Address</label>
										<input type="text" name="address" id="address" value={address} onChange={this.handleChange} />
										{errors.address.length > 0 && <span className='error'>{errors.address}</span>}

										<label htmlFor="mobile">Mobile</label>
										<input type="text" name="mobile" id="mobile" value={mobile} onChange={this.handleChange} />
										{errors.mobile.length > 0 && <span className='error'>{errors.mobile}</span>}

										<label htmlFor="college">College</label>
										<input type="text" name="college" id="college" value={college} onChange={this.handleChange} />
										{errors.college.length > 0 && <span className='error'>{errors.college}</span>}


										<input type="button" value={btn} onClick={this.submitForm} />
								</form>


						</div>
				)
		}

} */


export default Form;