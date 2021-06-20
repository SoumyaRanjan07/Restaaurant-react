import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navbarmenu from './Navbarmenu';
class RestaurantMake extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
            email:null
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/Restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                this.setState({ 
                    id:result.id,
                    name:result.name,
                    address:result.address,
                    rating:result.rating,
                    email:result.email
                 })
            })
        })
    }

update()
{
    fetch("http://localhost:3000/Restaurant/"+this.state.id, {
        method: "PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state)
    }).then((result) => {
        result.json().then((resp)=>
        {console.warn(resp);
            alert("Restaurant Updated Sucessfully ");
    })
})
}

    render() {
       
        // console.warn(this.state);
        return (
            <div>
         <Navbarmenu/>
                <h1>RestaurantUpdate</h1>
                <div className="">
                Name :
                <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                    placeholder="@Name" value={this.state.name}></input><br></br><br></br>
                Address :
                <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                    placeholder="abc" value={this.state.address}></input><br></br><br></br>
                Rating :
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                    placeholder="*****" value={this.state.rating}></input><br></br><br></br>
                Emailid :
                <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                    placeholder="xyz@gmail.com" value={this.state.email}></input><br></br><br></br>

                <Button onClick={() => {this.update() }}>Update Restaurant</Button>

            </div>
            </div>
        );
    }
}

export default RestaurantMake;