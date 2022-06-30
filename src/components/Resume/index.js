import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import HTMLCSSJS from '../../assets/img/HTML-CSS-JS.png';
import adobe from '../../assets/img/adobe.png';
import mysql from '../../assets/img/mySQL.png';
import mongo from '../../assets/img/mongo.png';

function Resume () {
    return (
<div>
        <center><a href="https://drive.google.com/file/d/1h-ZizzNekJQDs58Zgmbm3OCtipbZdkJL/view?usp=sharing"
        download><h1 id="resume">Download Resume</h1></a>
        <h1>Proficient with:</h1></center>
        <CardGroup>
                    {/* 1 */}
                <Card style={{ width: '3rem' }}>
                <Card.Img variant="top" style={{width: "300px"}} src={HTMLCSSJS} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>HTML</ListGroupItem>
                    <ListGroupItem>CSS</ListGroupItem>
                    <ListGroupItem>Javascript</ListGroupItem>
                </ListGroup>
                </Card>
                <Card style={{ width: '3rem' }}>
                <Card.Img variant="top" style={{width: "300px"}} src={adobe} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Adobe Photoshop</ListGroupItem>
                    <ListGroupItem>Adobe XD</ListGroupItem>
                    <ListGroupItem>Adobe Premiere Pro</ListGroupItem>
                </ListGroup>
                </Card>
                <Card style={{ width: '3rem' }}>
                <Card.Img variant="top" style={{width: "300px"}} src={mysql} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Data Entry</ListGroupItem>
                    <ListGroupItem>Connecting Databases</ListGroupItem>
                    <ListGroupItem>Entry Level Data Encryption</ListGroupItem>
                </ListGroup>
                </Card>
                <Card style={{ width: '3rem' }}>
                <Card.Img variant="top" style={{width: "300px"}} src={mongo} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Data Entry</ListGroupItem>
                    <ListGroupItem>Relational Data</ListGroupItem>
                    <ListGroupItem>Dynamic Data Development</ListGroupItem>
                </ListGroup>
                </Card>

                </CardGroup>

</div>
    )
}
export default Resume