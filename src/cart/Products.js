import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import data from '../data.json';
import Nav from '../cart/Nav.js';
import image from '../cart/images/shirt6.jpg';
import './Product.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
class Products extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            buyItem: []
        };
    }

    addToCart(event, itemIdCheck) {
        let getIds = this.state.buyItem.map(item => item.id);
        if (!getIds.includes(itemIdCheck)) {
            this.state.buyItem.push(event)
        } else {
            let checkIds = this.state.buyItem.filter(ids => {
                if (itemIdCheck == ids.id) {
                    return ids.quantity++;
                }
            })
        }

        this.setState({
            count: this.state.count + 1
        })
        this.props.onAPPClick(this.state.count + 1, this.state.buyItem) // passing triggered data as argument to Component tag to App.js

    }
    render() {
        const imageWH = {
            width: "185px",
            height: "195px"
        }
        const colHeight = {
            padding: "27px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center"

        }

        let filterData;
        if (this.props.name !== "") {
            filterData = data.filter(item => {
                console.log(item.size == this.props.name)
                return item.size == this.props.name;
            })
        } else {
            filterData = data.map(item => {
                // console.log(item)
                return item;
            })
        }
        console.log(this.props.name)
        return (

            <Row>

                {filterData.length > 0 ? filterData.map(item => (

                    <Col md={4} className="mainDivCart" style={colHeight} key={item.id}>
                        <Card className="h-100 shadow-sm bg-white rounded cardMain">
                            <span className="freeShipping">Free Shipping</span>
                            <Card.Img style={imageWH} variant="top" src={item.image} />
                            <Card.Body className="d-flex mb-2 flex-column">
                                <div className="d-flex mb-2 justify-content-between">
                                    <Card.Title className="mb-0 font-weight-bold shirtName">{item.name}</Card.Title> <hr className="hr" />
                                    <Badge pill className="mb-1 badgePrice" variant="warning"> <span className="doller">$</span>{item.price}</Badge>
                                </div>
                                {/* <Card.Text className="mb-1" variant="warning">${item.price}</Card.Text> */}
                                <Button onClick={() => this.addToCart(item, item.id)} data-price={item.price} className="mt-auto fon-weight-bold addButton" variant="success" block>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )) :
                    <Col md={12} style={colHeight}>
                        <Card className="h-100 shadow-sm bg-white rounded noSizeFound">
                            <div>No Size Found !</div>
                        </Card>
                    </Col>
                }

            </Row>

        )
    }
}

export default Products;