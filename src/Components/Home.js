import React  from 'react';
import { Carousel } from 'react-bootstrap';
import Navbarmenu from './Navbarmenu';

function Home() {
    
    return (
     
        <div>
               <Navbarmenu/>
            <Carousel fade>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img1.jpg "
                        alt="1st slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img2.jpg "
                        alt="2nd slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img3.jpg "
                        alt="3rd slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img4.jpg "
                        alt="4th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img5.jpg "
                        alt="5th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img6.jpg "
                        alt="6th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img7.jpg "
                        alt="7th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img8.jpg "
                        alt="8th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={  4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img9.jpg "
                        alt="9th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={ 4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img11.png "
                        alt="11th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={ 4000}>
                    <img
                        className="d-block w-100"
                        src="./images/img12.jpg "
                        alt="12th slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Home;