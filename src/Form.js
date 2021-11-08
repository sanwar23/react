import { Component } from "react";

class Form extends Component {

    initialState = {
        name: '',
        address: '',
        mobile: '',
        college: '',
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
                errors.name = value.length < 5 ? 'Name Should Not be empty' : '';
                break

            default:
                break;

        }

        this.setState({ errors, [name]: value }, () => {
            console.log(errors);
        })
    }



    submitForm = (event) => {
        /*    event.preventDefault();    
           if(validateForm(this.state.errors)){
               console.log('valid form')
           } else {
               console.log('Invalid form')
           } */

        this.props.handleSubmit(this.state)

        console.log(this.state);
        this.setState(this.initialState)
    }


    validateForm = (errors) => {
        let valid = true

        Object.values(errors).forEach(
            (val) => (val.length > 0) ? (valid = false) : valid = true
        )
    }

    componentDidMount() {

        /* if(this.props.usersEdit){
            this.setState({
                initialState:this.props.usersEdit
            })
        } */
        console.log(this.state);
    }
    componentWillReceiveProps(nextProps, nextState) {
        
        console.log('componentWillReceiveProps')
        if (this.state !== nextProps.users) {
            this.setState(
                nextProps.users
            )
            // this.setState({showNotif: true});
        }
    }

    render() {
        /*  if(this.props.usersEdit){
             
             this.setState({
                 initialState:this.props.usersEdit
             })
         } */

        const { name, address, mobile, college } = this.state;

        return (
            <div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />

                    <label htnlFor="address">Address</label>
                    <input type="text" name="address" id="address" value={address} onChange={this.handleChange} />

                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" name="mobile" id="mobile" value={mobile} onChange={this.handleChange} />

                    <label htmlFor="college">College</label>
                    <input type="text" name="college" id="college" value={college} onChange={this.handleChange} />

                    <input type="button" value="submit" onClick={this.submitForm} />
                </form>

                
            </div>
        )
    }

}


export default Form;