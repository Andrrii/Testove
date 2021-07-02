const menuLoaded = (newMenu) => {
    return {
        type:"MENU_LOADED",
        payload:newMenu
    }
}

const menuRequested = (newMenu) => {
    return {
        type:"MENU_REQUESTED"
        }
}

const addedToCard = (id) => {
    return {
        type:"ITEM_ADD_TO_CARD",
        payload:id
        }
}
const addedToDetail = (id) => {
    return {
        type:"ITEM_ADD_TO_DETAIL",
        payload:id
        }
}


const deleteFromDetail = () => {
    return {
        type:"ITEM_REMOVE_FROM_DETAIL",
        
        }
}


const deleteFromCard = (id) => {
    return {
        type:"ITEM_REMOVE_FROM_CARD",
        payload:id
        }
}

export {
    menuLoaded,
    menuRequested,
    addedToCard,
    deleteFromCard,
    addedToDetail,
    deleteFromDetail
}
