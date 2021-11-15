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

		if (props.btn === 'Update') {
			console.log('render---------------')
			setUser({
				...user,
				name: props.users.name,
				address: props.users.address,
				mobile: props.users.mobile,
				college: props.users.college
			})

		}
	}, [props])


	const handleChange = (event) => {

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
		if (validateForm(user.errors)) {
			if (handleValidation(user)) {

				props.handleSubmit(user)
				setUser(initialState)
			}
		}
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
				<div style={{ 'width': '100%' }}>
					<input type="button" value={user.btn} onClick={submitForm} />
				</div>
			</form>
		</div>
	)
}

export default Form;