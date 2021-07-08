import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navbarmenu from './Navbarmenu';
class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
            email:null
        }
    }
    create() {
        fetch("http://localhost:3001/Restaurant", {
            method: "Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp)=>
            {console.warn(resp);
                alert("Restaurant added Sucessfully ");
                <div>You can check back your list</div>
                
        })
    })
}
render() {
    
    return (
        <div  style={{ 
            backgroundImage: `url("./images/card9.jpg")` 
          }}>
            <div className="create-menu" >
            <Navbarmenu/>
            <h1>Create Restaurant</h1>
            <br></br>

                Name :
                <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                    placeholder="@Name"></input><br></br><br></br>
                Address :
                <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                    placeholder="abc"></input><br></br><br></br>
                Rating :
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                    placeholder="*****"></input><br></br><br></br>
                Emailid :
                <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                    placeholder="xyz@gmail.com"></input><br></br><br></br>

                <Button onClick={() => {this.create() }}>Add Restaurant</Button>

            </div>
        </div>
    );
}
}

export default RestaurantCreate;