import { Component } from "react";

class LifeCycle extends Component{
    constructor(){
        super();
        this.state = {
            message: "This is initail message"
        }
        console.log('constructor')
    }
    componentWillMount(){
        this.setState({message: "This is an Updated message"})
        console.log('componentWillMount')
    }
    componentDidMount(){
        this.setState({message: "This is coming from did mount"})
        console.log('componentDidMount')
    }

   

    render(){
        return (
            <div>
                {this.state.message}
            </div>
        )
    }

}


export default LifeCycle