import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Navbarmenu from './Navbarmenu';
class Login extends Component {
    constructor()
    {
        super()
        this.state={
            name:" ",
            password: ""
        }
    }
    login()
    {
        console.warn(this.state);
       
        fetch("http://localhost:3000/Login?q="+this.state.username).then((data) => {
            data.json().then((result) => {
                console.warn("result",result);
                if(result.length>0)
                {
                    localStorage.setItem('login',JSON.stringify(result))
                    console.warn(this.props.history.push('list'));
                    alert("Login Sucessfully")
                }
                else
                {
                  alert('please check username and password')
                 
                }
            
            })
        })
    }

    render() {
        return (
            <div>
                   <Navbarmenu/>
                Username :
                <input type='text' name='username' onChange={(event) => { this.setState({ username: event.target.value }) }}
                    placeholder="@Name"></input><br></br><br></br>
                Password :
                <input type='password' name="password" onChange={(event) => { this.setState({ password: event.target.value }) }}
                    placeholder="abc"></input><br></br><br></br>
                <Button onClick={()=>this.login()}>Login</Button>
            </div>
        );
    }
}

export default Login;