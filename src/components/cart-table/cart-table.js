import React from 'react';
import {connect} from "react-redux"
import {deleteFromCard} from "../../actions"

import './cart-table.scss';

const CartTable = ({items,deleteFromCard}) => {
  
    return (
        
        <>
            <div className="cart__title">Your Orders:</div>
            <div className="cart__list">
                {
                    items.map((item) => {
                        const {title,count, price, url, id} = item
                      
                        return (
                            <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-count">{count}x</div>
                            <div className="cart__item-price">{price}$</div>
                            <div onClick={() => deleteFromCard(id) } className="cart__close">&times;</div>
                        </div>
                        )
                    })
                }
               
            </div>
        </>
    );
};


const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    // Сложна 
    deleteFromCard
}

export default connect(mapStateToProps,mapDispatchToProps)(CartTable);