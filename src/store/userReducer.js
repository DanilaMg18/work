
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
let UPDATE_USER = 'UPDATE_USER'

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, loginUsers: [...state.loginUsers, action.payload]}
        
        case EDIT_USER:
            return {...state, editUsers: action.payload}
        
        case UPDATE_USER:
            return {...state, adminUser: state.adminUser = (user) => {

                if(user.id === action.payload) {
                    const updatedUser = {
                        id: user.id,
                        telnumer: action.payload.telnumber,
                        password: action.payload.password
                    }
                    return updatedUser
                }
                return user
            }}
        default: return state
    }
}
