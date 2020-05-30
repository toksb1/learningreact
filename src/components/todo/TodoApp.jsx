import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp"> 
            <Router >
                <>
                  <Switch>
                    <Route path="/" exact component = {LoginComponent}/>
                    <Route path="/login" component = {LoginComponent}/>
                    <Route path="/welcome/:name" component = {WelcomeComponent}/>
                    <Route component = {ErrorComponent}/>
                </Switch>
                </>
            </Router>

            </div>      
            
        )
    }
}
class WelcomeComponent extends Component{
    render(){
        return <div> Welcome : {this.props.match.params.name}</div>
   }
}

function ErrorComponent (){
    
        return <div> This Page does not exist contact support</div>
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed:false,
            showSuccessMessage: false
        };

       
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event){
        console.log(this.state);
        this.setState(
            {
                [event.target.name]
                      :event.target.value
            }
        )
    }
   
    // handlePassChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value })
    // }
    loginClicked (){
        if(this.state.username==='in28minutes' && this.state.password=== 'dummy'){
             this.props.history.push(`/welcome/${this.state.username}`)
             //this.setState({showSuccessMessage:true})
             //this.setState({hasLoginFailed: false})
        }
        else{
            console.log('failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed: true})
        }
           // console.log(this.state)
    }
    render(){
        return(
            <div>
            {/*<ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>*/}
               {/* <ShowSuccessCredentials showSuccessMessage = {this.state.showSuccessMessage}/>*/}
                {this.state.hasLoginFailed &&<div> Invalid Credentials</div>}
                {this.state.showSuccessMessage &&<div> Login Successful</div>}
                 User Name : <input type= "text" name="username" value = {this.state.username} onChange = {this.handleChange}/>
                 Password : <input type = "password" name ="password" value = {this.state.password} onChange = {this.handleChange}/>
                <button onClick ={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed){
//     return <div>Invalid Credentials</div>
//    }
//   return null;
// }
// function ShowSuccessCredentials(props){
//     if (props.showSuccessMessage){
//     return <div>Login Successful</div>
//     }
//    return null;
// }

export default TodoApp