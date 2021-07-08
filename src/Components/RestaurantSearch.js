import React, { Component} from 'react';
import { Table,Form,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Navbarmenu from './Navbarmenu';
 
class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false
        }

    }
    
    search(key)
    {
       
        fetch("http://localhost:3001/Restaurant?q="+key).then((data) => {
            data.json().then((result) => {
                console.warn("result",result);
                if(result.length>0)
                {
                    this.setState({ 
                       searchData:result,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})
                 
                }
            
            })
        })
    }

    render() {
        return (
           
            <Container>
                   <Navbarmenu/>
                <h1>RestaurantSearch</h1>
                
                <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="search"/>
                <div>
                    {
                    this.state.searchData?
                    <div>
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
                            this.state.searchData.map((item)=>
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
                     :" "
                }  
                {
                    this.state.noData?
                    <h3>No Data Found</h3>:null
                }           
                </div>
                </Container>
             
           
        );
      
    }
}

export default RestaurantSearch;