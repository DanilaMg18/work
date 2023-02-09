
const userDefaultState = {
    loginUsers: [{
        id: 1,
        telnumber: '862131602',
        password: '12345'
    },],

    adminUser: [{
        id: 1,
        telnumber: 'admin',
        password: 'admin',
    }]
}

let ADD_USER = 'ADD_USER'

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, loginUsers: [...state.loginUsers, action.payload]}

        default: return state
    }
}
