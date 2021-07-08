  
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Navbarmenu from './Navbarmenu';
 
class RestauranstList extends Component {
    constructor() {
        super()
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/Restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id)
    {
        fetch("http://localhost:3001/Restaurant/"+ id, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((resp)=>
            {console.warn(resp);
                alert("Restaurant deleted Sucessfully ");
                this.componentDidMount()
        })
    })
    }
    render() {
      
        console.warn(this.state)
        return (
            <div>
                <Navbarmenu/>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div className="list-wrapper">
                            <Table striped bordered hover variant="dark" width="1500px">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Contact/Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item,i) =>
                                            <tr>
                                                <td> {item.id}</td>
                                                <td> {item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td> {item.email}</td>
                                                <td><Link to={'/update/'+item.id}><FontAwesomeIcon icon={faEdit} color="Orange" padding-left = "100px"/></Link> 
                                                < Link onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrashAlt} color="Red" /></Link></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>
                            please wait
                        </p>
                }
            </div>
        );
    }
}

export default RestauranstList;