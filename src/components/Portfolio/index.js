import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import project1 from '../../assets/img/project-images/project1.png'
import project2 from '../../assets/img/project-images/books-of-alexandria.png'
import weather from '../../assets/img/project-images/weather.png'
import RB from '../../assets/img/project-images/run-buddy.png'
import zookeepr from'../../assets/img/project-images/zookeepr.png'
import ISS from '../../assets/img/project-images/ISS.png'
import maecenas from '../../assets/img/project-images/maecenas.png'

function Portfolio() {
    return (
        <section class="center my-5">
            <div class="center med-pad">
                <h1 id="portfolio">Portfolio</h1>
                <CardGroup>
                    {/* 1 */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project2} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Ecommerce Bookstore</ListGroupItem>
                    <ListGroupItem>Utilizing:</ListGroupItem>
                    <ListGroupItem>MySQL and Handlebars.js</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://cryptic-taiga-66100.herokuapp.com/">App</Card.Link>
                    <Card.Link href="https://github.com/jakelauterstein/books-of-alexandria">Github</Card.Link>
                </Card.Body>
                </Card>
                 {/* 2 */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={maecenas} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Blog Subscription App</ListGroupItem>
                    <ListGroupItem>Utilizing:</ListGroupItem>
                    <ListGroupItem>MERN Stack</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://gentle-citadel-11319.herokuapp.com/">App</Card.Link>
                    <Card.Link href="https://github.com/jakelauterstein/Maecenas-Devs">Github</Card.Link>
                </Card.Body>
                </Card>
                 {/* 3 */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={weather}/>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Weather Dashboard App</ListGroupItem>
                    <ListGroupItem>Utilizing:</ListGroupItem>
                    <ListGroupItem>API Fetch Request and Materialize CSS</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://jakelauterstein.github.io/weather-dashboard-challenge-6/">App</Card.Link>
                    <Card.Link href="https://github.com/jakelauterstein/weather-dashboard-challenge-6">Github</Card.Link>
                </Card.Body>
                </Card>
                </CardGroup>
                <p></p>
                {/* 2nd Group */}
                <CardGroup>
                    {/* 4 */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={RB} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Personal Training Demo Site</ListGroupItem>
                    <ListGroupItem>Utilizing</ListGroupItem>
                    <ListGroupItem>HTML and Custom CSS</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Card.Link href="https://jakelauterstein.github.io/run-buddy/">App</Card.Link>
                    <Card.Link href="https://github.com/jakelauterstein/run-buddy">Github</Card.Link>
                </Card.Body>
                </Card>
                {/* 5 */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project1} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Travel App</ListGroupItem>
                    <ListGroupItem>Utilizing</ListGroupItem>
                    <ListGroupItem>HTML/CSS/JS/Fetch API</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Card.Link href="https://jakelauterstein.github.io/project-1/">App</Card.Link>
                    <Card.Link href="https://github.com/jakelauterstein/project-1">Github</Card.Link>
                </Card.Body>
                </Card>
                {/* 6 */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={zookeepr} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Zoo Data Demo Site</ListGroupItem>
                    <ListGroupItem>Utilizing</ListGroupItem>
                    <ListGroupItem>HTML/CSS/JS & JSON Database</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Card.Link href="https://desolate-savannah-33890.herokuapp.com/">App</Card.Link>
                    <Card.Link href="https://github.com/jakelauterstein/zookeepr">Github</Card.Link>
                </Card.Body>
                </Card>
                </CardGroup>
            </div>
        </section>

        
    )
}

export default Portfolio;