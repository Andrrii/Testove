

const initialState = {
    menu: [],
    loading : true,
    items:  // Динамічно створюємо
        [],
    details : []
}

const reducer = (state = initialState,action) => {
    console.log(state)
    switch (action.type){
        case 'MENU_LOADED':
            return {
                ...state,    
                menu: action.payload,
                loading:false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading:true
            }
        case "ITEM_ADD_TO_CARD":
            const id = action.payload
            const item = state.menu.find(item => item.id === id)
            const x = state.items.find(x => x.id === id)
            console.log(x)
             if(x !==-1 && x!== undefined){
                x.count++
                x.price = x.value * x.count
                return {
                    ...state,
                    items: [
                        ...state.items,
                    ]
                }
            }
            else{
            const newItem = {
                title:item.title,
                url:item.url,
                id:item.id,
                count:item.count,
                price:item.price,
                value:item.price
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            }
            }
        case "ITEM_ADD_TO_DETAIL":{
            const id = action.payload
            const item = state.menu.find(item => item.id === id)
            const x = state.details.find(x => x.id === id)
            console.log(x)
             if(x !==-1 && x!== undefined){
                x.count++
                x.price = x.value * x.count
                return {
                    ...state,
                    details: [
                        ...state.details,
                    ]
                }
            }
            else{
            const newItem = {
                title:item.title,
                url:item.url,
                id:item.id,
                count:item.count,
                price:item.price,
                value:item.price
            }
            return {
                ...state,
                details: [
                    ...state.details,
                    newItem
                ]
            }
            }
        }
        case "ITEM_REMOVE_FROM_DETAIL": {
            return {
                ...state,
                // Вирізаєм елемент із store.items ,яким ми видалили
                details: []
            }
        
        }
        case "ITEM_REMOVE_FROM_CARD": {
            const idx = action.payload; // index of element
            const itemIndex = state.items.findIndex(item => item.id === idx)
            return {
                ...state,
                // Вирізаєм елемент із store.items ,яким ми видалили
                items: [
                    ...state.items.slice(0,itemIndex),
                    ...state.items.slice(itemIndex+1)
                ]
            }
        }
        
        default:
            return state
    }
}

export default reducer