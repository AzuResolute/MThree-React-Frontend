import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class Profile extends Component {
    
    render() {
        let {FirstName, LastName} = this.props
        return (
            // <div>
            //     {FirstName} {LastName}'s last name' is {LastName.length} chars long
            // </div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{LastName}, {FirstName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Linux AWS Docker Developer</Card.Subtitle>
                    <Card.Text>
                        Attained tools necessary to succeed as developers in the Financial Industry
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}
