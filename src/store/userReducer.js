
const userDefaultState = {
    loginUsers: [{
        id: 1,
        telnumber: '862131602',
        password: '12345'
    }],

    adminUser: {
        id: 1,
        telnumber: 'admin',
        password: 'admin',
    },
    
    editUsers: {}
}

let ADD_USER = 'ADD_USER'
let EDIT_USER = 'EDIT_USER'

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, loginUsers: [...state.loginUsers, action.payload]}
        
        case EDIT_USER:
            return {...state, editUsers: action.payload}
        
        default: return state
    }
}
