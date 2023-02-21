
const addToCart = {
    Allorders: [{
        id: 1,
        price: '1000 руб', 
        orderName: 'PADOVAN OVOMIX GOLD ROSSO',
        img: './assets/photos/CardData2.png'
    }

    ]
}

let ADD_ORDER = 'ADD_ORDER'
let DELETE_ORDER = 'DELETE_ORDER'


export const cartReducer = (state = addToCart, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {...state, Allorders: [...state.Allorders, action.payload]}

        case DELETE_ORDER:
            return {...state, Allorders: state.Allorders.filter(order => {
                return order.id !== action.payload
            })}

        default: return state
    }
}

export const deleteOrder = (payload) => {
    return {type: DELETE_ORDER, payload}
}
