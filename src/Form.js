import { Component } from "react";

class Form extends Component {

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

}


export default Form;