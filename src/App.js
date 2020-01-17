import React, { useState } from 'react';
import './App.css';
import Nav from './cart/Nav.js';
import Size from './cart/Size.js';
import Products from './cart/Products.js';

import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
function App() {




  let [value, setValue] = useState("")
  const getSize = (event) => {

    value = event.target.textContent
    setValue(value)
  }

  let [cartData, setCartData] = useState("")
  let [addtocat, setaddtocat] = useState([])


  const handleAddCart = (cartData, addtocat) => {

    setCartData(addtocat.length)
    setaddtocat(addtocat)
  }

  return (

    <Container>
      <Nav cartCount={cartData} appendToCart={addtocat} fromAppToNav={true} />
      <Row>
        <Col md={2} className="sizeCol">
          <div className="mainSize">
            <div className="">
              <h4>Sizes : </h4>
              <Badge onClick={getSize} pill className="mb-1 badgeSize" variant="warning">XS</Badge>
              <Badge onClick={getSize} pill className="mb-1 badgeSize" variant="warning">S</Badge>
              <Badge onClick={getSize} pill className="mb-1 badgeSize" variant="warning">M</Badge>
              <Badge onClick={getSize} pill className="mb-1 badgeSize" variant="warning" > ML</Badge><br />
              <Badge onClick={getSize} pill className="mb-1 badgeSize" variant="warning">L</Badge>
              <Badge onClick={getSize} pill className="mb-1 badgeSize" variant="warning">XL</Badge>
              <Badge onClick={getSize} pill className="mb-1 badgeSize" variant="warning">XXL</Badge>
            </div>
            <div>
              <h6>Leave a star on Github if this repository was useful :</h6>
              <div>
                <Button onClick={getSize} className="font-weight-bold" variant="default">Star</Button>
                <Button className="font-weight-bold" variant="default">581</Button>
              </div>
            </div>

          </div >
        </Col>
        <Col md={10}><Products name={value} val="product" onAPPClick={handleAddCart} /></Col>
      </Row>
    </Container>
  );

}
export default App;
