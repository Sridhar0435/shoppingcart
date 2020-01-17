import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Size.css';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
class Size extends Component {


    render() {
        const getSize = ($event) => {
            console.log($event.target.textContent)
        }
        return (
            <div className="mainSize">
                <div className="">
                    <h4>Sizes : </h4>
                    <Badge onClick={getSize} pill className="mb-1 badge" variant="warning">XS</Badge>
                    <Badge onClick={getSize} pill className="mb-1" variant="warning">S</Badge>
                    <Badge onClick={getSize} pill className="mb-1" variant="warning">M</Badge>
                    <Badge onClick={getSize} pill className="mb-1" variant="warning">M</Badge><br />
                    <Badge onClick={getSize} pill className="mb-1" variant="warning" > ML</Badge>
                    <Badge onClick={getSize} pill className="mb-1" variant="warning">L</Badge>
                    <Badge onClick={getSize} pill className="mb-1" variant="warning">XL</Badge>
                    <Badge onClick={getSize} pill className="mb-1" variant="warning">XXL</Badge>
                </div>
                <div>
                    <h6>Leave a star on Github if this repository was useful :)</h6>
                    <div>
                        <Button onClick={getSize} className="font-weight-bold" variant="default">Star</Button>
                        <Button className="font-weight-bold" variant="default">581</Button>
                    </div>
                </div>

            </div >
        );
    }
}

export default Size;