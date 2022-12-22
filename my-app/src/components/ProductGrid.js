import React,{useEffect, useState} from 'react'
import {Card, Row, Col, Container} from 'react-bootstrap'
import bracket from "../images/bracket.jpg"
import cone from "../images/cone.jpg"
import roller from '../images/roller.jpg'
import hexhandle from '../images/hexhandle.jpg'
import multispinner from '../images/multispinner.jpg'

export default function ProductCard(){

    //instead of an array, data would be retrieved from square API

    const productarr = [
        {Name: "Hex Handle", Price: "$40.00", Quantity: 2, Image:{hexhandle} },
        {Name: "Rolling Handle", Price: "$30.00", Quantity: 8, Image:{roller} },
        {Name: "Cone Handle", Price: "$20.00", Quantity: 18, Image:{cone} },
        {Name: "Handle Bracket", Price: "$10.00", Quantity: 50, Image:{bracket} },
        {Name: "Multispinner Handle", Price: "$40.00", Quantity: 2, Image:{multispinner} },
    ]

    //bootstrap react used for the display properties and the card class
    return (
        <Container>
            <Row>
                {productarr.map((productarr, k) => (
                    <Col key={k} lg={true}>
                        <Card >
                            <Card.Img src="https://via.placeholder.com/150x75" />

                            <Card.Body>
                                <Card.Title>{productarr.Name}</Card.Title>
                                <Card.Text>{productarr.Price}</Card.Text>
                                <Card.Subtitle>{productarr.Quantity}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )

    /*return (
        <Container>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
      );*/


}
      