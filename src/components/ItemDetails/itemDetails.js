import {connect} from "react-redux"
import {deleteFromDetail} from "../../actions"
import React,{useEffect} from "react"
import './itemDetails';

const ItemDetails = ({details,deleteFromDetail}) => {
  useEffect(() => {
     return () =>{deleteFromDetail()}
  
 })
  
    return (
        
        <>
            <div className="cart__title">Details</div>
            <div className="cart__list">
                {
                    details.map((item) => {
                        const {title,count, price, url, id} = item
                      
                        return (

                            
                            <li className="menu__item" key={id}>

                            <div className="menu__title">{title}</div>
                            <img className="menu__img" src={url}  alt={title}></img>
                            <div className="menu__price">Price: <span>{price}$</span></div>
                            <div className="menu__price">Count: <span>{count}X</span></div>
                            </li>
                            
                        )
                    })
                }
               
            </div>
        </>
    );
};


const mapStateToProps = ({details}) => {
    return {
        details
    }
}

const mapDispatchToProps = {
    deleteFromDetail
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetails);