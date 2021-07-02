import React from 'react';
import './menu-list-item.scss';
import { Link } from 'react-router-dom';

const MenuListItem = ({menuItem,onAddToCard,detailed}) => {
    let counter = 1
    menuItem.count = counter
    const {title,price,url,category,count} = menuItem
    
    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url}  alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <div className="menu__price">Count: <span>{count}X</span></div>
                <button onClick = {() => onAddToCard()} className="menu__btn">Add to cart</button>
                <Link to = "/details"><button onClick = {() => detailed()} className="menu__btn">Details</button></Link>
            </li>
    )
}

export default MenuListItem;