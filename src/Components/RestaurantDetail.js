import React, { Component } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import Navbarmenu from './Navbarmenu';
class RestaurantDetail extends Component {
    render() {
   
        return (
            <div class="card-menu">
                <Navbarmenu/>
                <Table>
                    <tr>
                        <td>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card1.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card2.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card3.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card4.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card5.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                    <tr>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card6.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card7.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card8.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card9.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/card10.jpg " />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                </Table>
            </div>
        );
    }
}

export default RestaurantDetail;