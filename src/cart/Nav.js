import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './Nav.css';
import { Toast, ToastHeader, ToastBody } from 'react-bootstrap';
import CartList from '../cart/CartList.js';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showA: false,
            cartD: "",
            countStatusList: false
        }
    }

    toggleShowA() {
        this.setState({
            showA: !this.state.showA
        })
    }
    countFromCartList(count) {
        this.setState({
            cartD: count,
            countStatusList: true
        })
    }
    //continue here also regarding push data
    render() {
        let countNow = "";

        if (this.state.countStatusList == false) {
            if (this.props.appendToCart.length == 0) {
                countNow = "";
            } else {
                countNow = this.props.appendToCart.length;
            }

        } else if (this.state.cartD == 0) {
            countNow = "";
            this.state.countStatusList = false
        } else {
            countNow = this.state.cartD;
            this.state.countStatusList = false
        }
        console.log(this.state.cartD)
        console.log(this.props.appendToCart)
        return (

            <div>
                <nav>
                    <span className="searchSpan" onClick={() => this.toggleShowA()}><i className="fa fa-cart-plus" aria-hidden="true">
                        <span className={countNow ? "count" : ""}>{countNow}</span>
                    </i>
                    </span><br />
                    {this.state.showA ? <CartList name={this.props.appendToCart} getCount={this.countFromCartList.bind(this)} /> : ""}
                    {/* stopped here */}
                    <h4>Egnify</h4>
                </nav>
            </div>
        )
    }
}


export default Nav;