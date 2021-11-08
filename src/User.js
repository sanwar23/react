import { Component } from "react";

class User extends Component {

    editForm = ()=>{
        console.log(this.props.users);
        this.props.handleSubmit(this.props.users);
    }


    render() {
        return (
            <div style={{ 'margin-top': '30px' }}>
                <h1>Filled Details</h1>
                <input type="button" value="Edit" onClick={this.editForm} />
                
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>{this.props.users.name}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{this.props.users.address}</td>
                    </tr>
                    <tr>
                        <td>Mobile:</td>
                        <td>{this.props.users.mobile}</td>
                    </tr>
                    <tr>
                        <td>College:</td>
                        <td>{this.props.users.college}</td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default User;