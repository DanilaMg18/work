
const addToCart = {
    Allorders: [{
        id: 1,
        price: '1000 руб', 
        orderName: 'PADOVAN OVOMIX GOLD ROSSO',
    }

    ]
}

let ADD_ORDER = 'ADD_ORDER'


export const cartReducer = (state = addToCart, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {...state, Allorders: [...state.Allorders, action.payload]}

        default: return state
    }
}
