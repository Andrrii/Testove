import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux" // read in the internet
import WithRestoService from "../hoc" // get Data from server
import {menuLoaded,menuRequested,addedToCard,addedToDetail} from "../../actions"
import Spinner from "../spinner"
import ItemDetails from "../ItemDetails"
import { Link } from 'react-router-dom';

import './menu-list.scss';




class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested()
        //  get data from server
        const {RestoService} = this.props
        RestoService.getMenuItems()
        .then((result) => {
            this.props.menuLoaded(result)
        })
    }


    render() {
        const {menuItems,loading,addedToCard,addedToDetail} = this.props 

        if(loading){
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                     return <MenuListItem 
                                key = {menuItem.id} 
                                menuItem = {menuItem}
                                onAddToCard = {() => addedToCard(menuItem.id)}
                                detailed = {() => addedToDetail(menuItem.id)}
                                />
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems:state.menu,
        loading:state.loading
    }
} 

const mapDispatchToProps = {
 
    menuLoaded,
    menuRequested,
    addedToCard,
    addedToDetail
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList)); // connect зв'язує Menulist & Redux