import React from 'react';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';

import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({items}) => {
    let total = 0
    items.map((item) => {
        const {price} = item
        total += price
    })
    return (
        <header className="header">
        <Link to ={'/'} className = "header__link">Menu</Link>
        <Link to = "/cart" className = "header__link">
            <img className="header__cart" src={cartIcon} alt="cart"></img>
            Total: {total} $
        </Link>
    </header>
    )
};
const mapStateToProps = ({items}) => {
    return {
        items
    }
}
export default connect(mapStateToProps)(AppHeader);