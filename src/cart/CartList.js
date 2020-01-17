import React, { Component, useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Animated } from "react-animated-css";
import Table from 'react-bootstrap/Table';
import './CartList.css';


class CartList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    removeItem(id) {
        this.state.data.filter((itemId, index) => {
            if (id == itemId.id) {
                this.state.data.splice(index, 1)
                this.setState({
                    data: this.state.data
                })
                this.props.getCount(this.state.data.length)
            }
        })

        console.log(id)
    }
    render() {

        this.state.data = this.props.name
        console.log(this.state.data)
        var total = this.state.data.reduce((sum, item) => {
            return sum + parseInt(item.price);
        }, 0)
        return (
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <div className="list">
                    <div className="itemsheight">
                        {this.state.data.map(item => (
                            <Row className="itemRow" key={item.id}>
                                <Col md={8}>
                                    <div className="selectedItem">
                                        <div><img src={item.image} alt="image" /></div>
                                        <ul className="itemDetails">
                                            <li>{item.name}</li>
                                            <li> {item.size}| Grey</li>
                                            <li>Quantity {item.quantity}</li>
                                        </ul>
                                    </div>

                                </Col>
                                <Col className="priceCol" md={4}>
                                    <ul className="priceUl">
                                        <li onClick={() => this.removeItem(item.id)} className="close">&times;</li>
                                        <li className="price">${item.price}</li>
                                    </ul>
                                </Col>
                            </Row>
                        ))}
                    </div>
                    <div>
                        <Row className="itemRow subtotal">
                            <Col md={8}>
                                <div className="selectedItem">
                                    <div className="subtotaltext">Sub total</div>
                                </div>

                            </Col>
                            <Col className="priceCol" md={4}>
                                <ul className="priceUl pricorup">
                                    <li className="price subtotalprice">${total}</li>
                                    <li className="price subtotalprice orup">OR UP TO 5 x $ 20.89</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="checkout">
                            <Button className="checkoutButton" variant="secondary" size="md" block>CHECKOUT</Button>
                        </Row>

                    </div>

                </div>
            </Animated>

        )
    }
}

export default CartList;